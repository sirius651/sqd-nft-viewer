import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Owner} from "./owner.model"
import {Token} from "./token.model"

@Entity_()
export class OwnerToken {
    constructor(props?: Partial<OwnerToken>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Owner, {nullable: true})
    owner!: Owner

    @Index_()
    @ManyToOne_(() => Token, {nullable: true})
    token!: Token
}
