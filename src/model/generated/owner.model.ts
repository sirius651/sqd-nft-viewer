import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {OwnerToken} from "./ownerToken.model"

@Entity_()
export class Owner {
    constructor(props?: Partial<Owner>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @OneToMany_(() => OwnerToken, e => e.owner)
    tokens!: OwnerToken[]
}
