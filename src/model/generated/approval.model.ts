import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Owner} from "./owner.model"

@Entity_()
export class Approval {
    constructor(props?: Partial<Approval>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Owner, {nullable: true})
    from!: Owner | undefined | null

    @Index_()
    @ManyToOne_(() => Owner, {nullable: true})
    to!: Owner | undefined | null

    @Column_("bool", {nullable: true})
    approved!: boolean | undefined | null

    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Column_("int4", {nullable: false})
    block!: number
}
