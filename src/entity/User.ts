import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsEmail } from 'class-validator';
import { Shop } from './Shop';

@Entity({ name: 'User' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    password: string;

    @Column()
    company: string;

    @Column({ nullable: true })
    role: string;

    @OneToMany(() => Shop, (shop) => shop.user)
    shops: Shop[];
}
