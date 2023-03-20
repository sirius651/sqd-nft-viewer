import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Contract} from "./contract.model"
import {Token} from "./token.model"

@Entity_()
export class ContractToken {
    constructor(props?: Partial<ContractToken>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Contract, {nullable: true})
    contract!: Contract

    @Index_()
    @ManyToOne_(() => Token, {nullable: true})
    token!: Token
}
