import { lookupArchive } from "@subsquid/archive-registry"
import * as ss58 from "@subsquid/ss58"
import {BatchContext, BatchProcessorItem, SubstrateBatchProcessor} from "@subsquid/substrate-processor"
import {Store, TypeormDatabase} from "@subsquid/typeorm-store"
import {In} from "typeorm"
import * as rmrk from "./abi/rmrk"
import {Owner, Token, Contract, Transfer} from "./model/generated"
 
const BASE_CONTRACT_ADDRESS = '0x1e0816527de55258aff862dd8d82949cf0504756d2b3638a0e6839c05d2cee53'
//Wcg8cuKcJgQGm15tZ5F14JXuWehm1Q67K92jfbTpKPrPm6S
const EQUIP_CONTRACT_ADDRESSES = ['0xcf61acd6296b717b8f18b49e2e4390058490ea13858d71c502e8a9cd1cf38d81', '0x0c8ba69231ceffb9b6dca2bf77d3a47011fb0c100a0bb0730d566d7efab9d931', '0x3e707397a9159b2214da3d36346ead6f053aa3ef30cf277630149c910f343efe', '0xefea7e8dc7dcfc12554d93b18063791c47653415e90b4a622b3133e3198ed1e8']
// const EQUIP_CONTRACT_ADDRESS = ['adDDmXkrVUhcFNy74zJm9CohrvDCbBixhvLCzrrmzo5HG3U', 'WDkMQy5AgSXfByPW23szAFYrxtXbNUA7umL49YbTZysfa9w', 'XMAfed8ZvqDUQzoy8NuU715vhKs6rRckSYwSWuqQsM8ZWGv', 'bMsPywwU4m9F9ZZ48cSffEyGeYJ66A5N3PGDv76Yogpp7zX']
 
const processor = new SubstrateBatchProcessor()
    .setBlockRange({ from: 3397990 })
    .setDataSource({
        archive: lookupArchive("shibuya", { release: "FireSquid" })
    })
    .addContractsContractEmitted(BASE_CONTRACT_ADDRESS, {
        data: {
            event: {args: true}
        }
    } as const)

for (const address of EQUIP_CONTRACT_ADDRESSES) {
  processor.addContractsContractEmitted(address, {
    data: {
        event: {args: true}
    }
  } as const)
}
 
type Item = BatchProcessorItem<typeof processor>
type Ctx = BatchContext<Store, Item>

processor.run(new TypeormDatabase(), async ctx => {
    const txs = extractRecords(ctx)
 
    const contracts = new Set<string>()
    const tokensIds = new Set<string>()
    const ownersIds = new Set<string>()
    txs.forEach(tx => {
      contracts.add(tx.contract)
      tokensIds.add(tx.tokenId)
      if (tx.from) {
        ownersIds.add(tx.from)
      }
      if (tx.to) {
        ownersIds.add(tx.to)
      }
    })

    ctx.log.info(contracts)
    // ctx.log.info(ownersIds)

    const contractsMap = await ctx.store.findBy(Contract, {
      id: In([...contracts])
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
 
    const transfers = txs.map(tx => {
        const tokenId = tx.tokenId
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

        let token = tokensMap.get(tokenId)
        if (token == null) {
          token = new Token({
            id: tokenId,
          })
          tokensMap.set(tokenId, token)
        }
        token.owner = transfer.to

        let contract = contractsMap.get(tx.contract)
        if (contract == null) {
          contract = new Contract({
            id: tx.contract,
          })
          contractsMap.set(tx.contract, contract)
        }
        token.contract = contract

        transfer.token = token
 
        return transfer
    })
 
    await ctx.store.save([...contractsMap.values()])
    await ctx.store.save([...ownersMap.values()])
    await ctx.store.save([...tokensMap.values()])
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
          ctx.log.info('Item: ' + item.name)
          ctx.log.info(item)
            if (item.name === 'Contracts.ContractEmitted' && (item.event.args.contract === BASE_CONTRACT_ADDRESS || EQUIP_CONTRACT_ADDRESSES.includes(item.event.args.contract))) {
                const event = rmrk.decodeEvent(item.event.args.data)
                ctx.log.info(event)
                if (event.__kind === 'Transfer') {
                  ctx.log.info('tokenId: ' + event.id.value)
                  const newObj = {
                    contract: item.event.args.contract,
                    id: item.event.id,
                    tokenId: event.id.value.toString(),
                    from: event.from && ss58.codec(5).encode(event.from),
                    to: event.to && ss58.codec(5).encode(event.to),
                    block: block.header.height,
                    timestamp: new Date(block.header.timestamp)
                  }
                  ctx.log.info('newObj:' + JSON.stringify(newObj))
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
 