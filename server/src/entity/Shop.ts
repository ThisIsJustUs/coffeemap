import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { User } from './User';

@Entity({ name: 'Shop' })
export class Shop {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    location: string;

    @Column()
    userId: number;
    @ManyToOne(() => User, (user) => user.shops)
    @JoinColumn({ name: 'userId' })
    user: User;
}
