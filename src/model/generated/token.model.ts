import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import {Owner} from "./owner.model"
import {Contract} from "./contract.model"
import {Transfer} from "./transfer.model"

@Entity_()
export class Token {
    constructor(props?: Partial<Token>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Owner, {nullable: true})
    owner!: Owner | undefined | null

    @Index_()
    @ManyToOne_(() => Contract, {nullable: true})
    contract!: Contract

    @OneToMany_(() => Transfer, e => e.token)
    transfers!: Transfer[]
}
