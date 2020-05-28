import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: bigint;

    @Column({unique: true})
    username: string;

    @Column({unique: true})
    email: string;

    @Column()
    first_name: string;

    @Column({nullable: true})
    middle_name: string;

    @Column()
    last_name: string;

    @Column({default: true})
    activated: boolean;
}
