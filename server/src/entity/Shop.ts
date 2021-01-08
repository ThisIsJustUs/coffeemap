import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Shop' })
export class Shop {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    location: string;
}
