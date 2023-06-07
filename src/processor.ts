import { lookupArchive } from "@subsquid/archive-registry"
import * as ss58 from "@subsquid/ss58"
import { encodeAddress } from "@polkadot/util-crypto"
import {BatchContext, BatchProcessorItem, SubstrateBatchProcessor} from "@subsquid/substrate-processor"
import {Store, TypeormDatabase} from "@subsquid/typeorm-store"
import {In} from "typeorm"
import * as rmrk from "./abi/rmrk"
import {Owner, Token, Contract, ContractToken, OwnerContractToken, Transfer} from "./model/generated"
 
const BASE_CONTRACT_ADDRESSES = ['0x045c301440e028ca69374ae856650032413b41917b982813ec4695d3f47d41cd', '0xef160e4e8ebaff3e30af8446071ec6a99ae980298ee892063521d23063ac5703']
const BASE_CONTRACT_SS58_ADDRESSES = ['W31sRs7oHgzYTLa2xoVR8yU6dXC3GnUBBMQo2HoCY4Fneyq', 'bLnHkdnmesecS8rJ9gW7tXcWGijcZtii5Vg1nj1rZytBsbb']

// const EQUIP_CONTRACT_ADDRESSES = ['0xcf61acd6296b717b8f18b49e2e4390058490ea13858d71c502e8a9cd1cf38d81', '0x0c8ba69231ceffb9b6dca2bf77d3a47011fb0c100a0bb0730d566d7efab9d931', '0x3e707397a9159b2214da3d36346ead6f053aa3ef30cf277630149c910f343efe', '0xefea7e8dc7dcfc12554d93b18063791c47653415e90b4a622b3133e3198ed1e8']
// const EQUIP_CONTRACT_SS58_ADDRESSES = ['adDDmXkrVUhcFNy74zJm9CohrvDCbBixhvLCzrrmzo5HG3U', 'WDkMQy5AgSXfByPW23szAFYrxtXbNUA7umL49YbTZysfa9w', 'XMAfed8ZvqDUQzoy8NuU715vhKs6rRckSYwSWuqQsM8ZWGv', 'bMsPywwU4m9F9ZZ48cSffEyGeYJ66A5N3PGDv76Yogpp7zX']
 
const processor = new SubstrateBatchProcessor()
    .setBlockRange({ from: 3890990 })
    .setDataSource({
        archive: lookupArchive("shibuya", { release: "FireSquid" })
    })
    .addContractsContractEmitted(BASE_CONTRACT_ADDRESSES[0], {
      data: {
          event: {args: true}
      }
    } as const)

for (let i = 1; i < BASE_CONTRACT_ADDRESSES.length; i++) {
  const address = BASE_CONTRACT_ADDRESSES[i];
  processor.addContractsContractEmitted(address, {
    data: {
        event: {args: true}
    }
  } as const)
}

// for (const address of EQUIP_CONTRACT_ADDRESSES) {
//   processor.addContractsContractEmitted(address, {
//     data: {
//         event: {args: true}
//     }
//   } as const)
// }
 
type Item = BatchProcessorItem<typeof processor>
type Ctx = BatchContext<Store, Item>

processor.run(new TypeormDatabase(), async ctx => {
    const txs = extractRecords(ctx)
 
    const contractIds = new Set<string>()
    const tokensIds = new Set<string>()
    const ownersIds = new Set<string>()
    txs.forEach(tx => {
      contractIds.add(tx.contract)
      tokensIds.add(tx.tokenId)
      if (tx.from) {
        ownersIds.add(tx.from)
      }
      if (tx.to) {
        ownersIds.add(tx.to)
      }
    })

    ctx.log.info(contractIds)
    ctx.log.info(ownersIds)

    const contractsMap = await ctx.store.findBy(Contract, {
      id: In([...contractIds])
    }).then(contracts => {
      return new Map(contracts.map(contract => [contract.id, contract]))
    });
    const tokensMap = await ctx.store.findBy(Token, {
      id: In([...tokensIds])
    }).then(tokens => {
      return new Map(tokens.map(token => [token.id, token]))
    })
    const ownersMap = await ctx.store.findBy(Owner, {
      id: In([...ownersIds])
    }).then(owners => {
      return new Map(owners.map(owner => [owner.id, owner]))
    })

    const contractTokensMap: Map<String, ContractToken> = new Map()
    const ownerContractTokensMap: Map<String, OwnerContractToken> = new Map()
 
    const transfers = txs.map(tx => {
        const tokenId = tx.tokenId
        const contractId = tx.contract
        const contractTokenMapId = contractId + '-' + tokenId

        const transfer = new Transfer({
            id: tx.id, 
            block: tx.block,
            timestamp: tx.timestamp
        })
 
        if (tx.from) {
            transfer.from = ownersMap.get(tx.from)
            if (transfer.from == null) {
              transfer.from = new Owner({id: tx.from})
              ownersMap.set(tx.from, transfer.from)
            }
        }
 
        if (tx.to) {
            transfer.to = ownersMap.get(tx.to)
            if (transfer.to == null) {
                transfer.to = new Owner({id: tx.to})
                ownersMap.set(tx.to, transfer.to)
            }
        }

        let contract = contractsMap.get(contractId)
        if (contract == null) {
          contract = new Contract({
            id: contractId,
          })
          contractsMap.set(contractId, contract)
        }

        let token = tokensMap.get(tokenId)
        if (token == null) {
          token = new Token({
            id: tokenId,
          })
          tokensMap.set(tokenId, token)
        }

        let contractToken = contractTokensMap.get(contractTokenMapId)
        if (contractToken == null) {
          contractToken = new ContractToken({
            id: contractTokenMapId,
            contract: contract,
            token: token
          })
          contractTokensMap.set(contractTokenMapId, contractToken)
        }

        let ownerContractToken = ownerContractTokensMap.get(contractTokenMapId)
        const ownerContractTokenMapId = contractTokenMapId + '-' + tx.to
        const newOwner = transfer.to
        if (newOwner && BASE_CONTRACT_SS58_ADDRESSES.includes(contractId)) {
          if (ownerContractToken == null) {
            ownerContractToken = new OwnerContractToken({
              id: ownerContractTokenMapId,
              owner: newOwner,
              contractToken: contractToken
            })
          } else {
            ownerContractToken.id = ownerContractTokenMapId
            ownerContractToken.owner = newOwner
            ownerContractToken.contractToken = contractToken
          }
          
          ownerContractTokensMap.set(contractTokenMapId, ownerContractToken)  
        }
        
        transfer.contract = contract
        transfer.token = token
 
        return transfer
    })
 
    await ctx.store.save([...contractsMap.values()])
    await ctx.store.save([...ownersMap.values()])
    await ctx.store.save([...tokensMap.values()])
    await ctx.store.save([...contractTokensMap.values()])
    await ctx.store.save([...ownerContractTokensMap.values()])
    await ctx.store.insert(transfers)
})
 
 
interface TransferRecord {
    contract: string
    id: string
    tokenId: string
    from?: string
    to?: string
    block: number
    timestamp: Date
}
 
function extractRecords(ctx: Ctx): TransferRecord[] {
    const records: TransferRecord[] = []
    for (const block of ctx.blocks) {
        for (const item of block.items) {
          // ctx.log.info('Item: ' + item.name)
          // ctx.log.info(item)
            if (item.name === 'Contracts.ContractEmitted' && (BASE_CONTRACT_ADDRESSES.includes(item.event.args.contract))) { //|| EQUIP_CONTRACT_ADDRESSES.includes(item.event.args.contract))) {
                const event = rmrk.decodeEvent(item.event.args.data)
                ctx.log.info(event)
                if (event.__kind === 'Transfer') {
                  // ctx.log.info('contract: ' + encodeAddress(item.event.args.contract, 5))

                  const newObj = {
                    contract: encodeAddress(item.event.args.contract, 5),
                    id: item.event.id,
                    tokenId: event.id.value.toString(),
                    from: event.from && ss58.codec(5).encode(event.from),
                    to: event.to && ss58.codec(5).encode(event.to),
                    block: block.header.height,
                    timestamp: new Date(block.header.timestamp)
                  }

                  // if (event.from && ss58.codec(5).encode(event.from) === 'axodJWpkSi9E5k7SgewYCCnTMZw3y6n79nuLevTCGFt7ADw') {
                  //   ctx.log.info('newObjF:' + JSON.stringify(newObj))
                  // }
                  // if (event.to && ss58.codec(5).encode(event.to) === 'axodJWpkSi9E5k7SgewYCCnTMZw3y6n79nuLevTCGFt7ADw') {
                  //   ctx.log.info('newObjT:' + JSON.stringify(newObj))
                  // }
                  records.push(newObj)
                } 
                // else if (event.__kind === 'Approval') {
                  
                // } else if (event.__kind === 'ChildAdded') {

                // } else if (event.__kind === 'ChildAccepted') {

                // } else if (event.__kind === 'ChildRemoved') {

                // } else if (event.__kind === 'ChildRejected') {

                // } else if (event.__kind === 'AssetSet') {

                // } else if (event.__kind === 'AssetAddedToToken') {

                // } else if (event.__kind === 'AssetAccepted') {

                // } else if (event.__kind === 'AssetRejected') {

                // } else if (event.__kind === 'AssetRemoved') {

                // } else if (event.__kind === 'AssetPrioritySet') {

                // } else if (event.__kind === 'AssetEquipped') {

                // } else if (event.__kind === 'AssetUnEquipped') {

                // } else if (event.__kind === 'ParentEquippableGroupSet') {

                // }
            }
        }
    }
    return records
}
 