import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('roles')
export class Role {

    @PrimaryGeneratedColumn()
    id: bigint;

    <%COLUMNS%>

    @Column({default: true})
    activated: boolean;
}
