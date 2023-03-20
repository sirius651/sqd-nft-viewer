import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {Transfer} from "./transfer.model"
import {ContractToken} from "./contractToken.model"
import {OwnerToken} from "./ownerToken.model"

@Entity_()
export class Token {
    constructor(props?: Partial<Token>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @OneToMany_(() => Transfer, e => e.token)
    transfers!: Transfer[]

    @OneToMany_(() => ContractToken, e => e.token)
    contracts!: ContractToken[]

    @OneToMany_(() => OwnerToken, e => e.token)
    owners!: OwnerToken[]
}
