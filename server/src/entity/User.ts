import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToMany,
} from 'typeorm';
import { Shop } from './Shop';

@Entity({ name: 'User' })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    role: string;

    @Column({ nullable: true })
    image: string;

    @OneToMany(() => Shop, (shop) => shop.id)
    shops: Shop[];
}
