import { lookupArchive } from "@subsquid/archive-registry"
import * as ss58 from "@subsquid/ss58"
import {BatchContext, BatchProcessorItem, SubstrateBatchProcessor} from "@subsquid/substrate-processor"
import {Store, TypeormDatabase} from "@subsquid/typeorm-store"
import {In} from "typeorm"
import * as rmrk from "./abi/rmrk"
import {Owner, Token, Transfer} from "./model/generated"
 
// const CONTRACT_ADDRESS = '0x5207202c27b646ceeb294ce516d4334edafbd771f869215cb070ba51dd7e2c72' 
const CONTRACT_ADDRESS = '0x21ca908ec863813eec00aede9370c38ce3c6176fc40eeb87f18383c71f62eb47'
//Whc3ikvddB9u4cgHHYA3eZWSiPuciWSxgiY4xZQjvbv9SeT
 
const processor = new SubstrateBatchProcessor()
    .setBlockRange({ from: 3167590 })
    .setDataSource({
        archive: lookupArchive("shibuya", { release: "FireSquid" })
    })
    .addContractsContractEmitted(CONTRACT_ADDRESS, {
        data: {
            event: {args: true}
        }
    } as const)
 
 
type Item = BatchProcessorItem<typeof processor>
type Ctx = BatchContext<Store, Item>

processor.run(new TypeormDatabase(), async ctx => {
    const txs = extractRecords(ctx)
 
    const tokensIds = new Set<string>()
    const ownersIds = new Set<string>()
    txs.forEach(tx => {
      tokensIds.add(tx.tokenId)
      if (tx.from) {
        ownersIds.add(tx.from)
      }
      if (tx.to) {
        ownersIds.add(tx.to)
      }
    })

    ctx.log.info(ownersIds)

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

        transfer.token = token
 
        return transfer
    })
 
    await ctx.store.save([...ownersMap.values()])
    await ctx.store.save([...tokensMap.values()])
    await ctx.store.insert(transfers)
})
 
 
interface TransferRecord {
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
            if (item.name === 'Contracts.ContractEmitted' && item.event.args.contract === CONTRACT_ADDRESS) {
                const event = rmrk.decodeEvent(item.event.args.data)
                ctx.log.info(event)
                if (event.__kind === 'Transfer') {
                  ctx.log.info('tokenId: ' + event.id.value)
                  const newObj = {
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
 