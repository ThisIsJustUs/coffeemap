import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Auth' })
export class Auth {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;
}
