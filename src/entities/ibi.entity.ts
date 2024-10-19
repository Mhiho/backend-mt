import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ibi {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    attack: number;

    @Column()
    attackVsBuilding: number;

    @Column()
    defense: number;

    @Column()
    hitpoints: number;

    @Column()
    exp: number;
}
