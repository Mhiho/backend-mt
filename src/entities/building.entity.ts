import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Building {
    @PrimaryGeneratedColumn({ type: 'integer' })
    id: number;

    @Column()
    name: string;

    @Column()
    woodCost: number;

    @Column()
    stoneCost: number;

    @Column()
    silverCost: number;

    @Column()
    crystalCost: number;

    @Column()
    buildingTimeInSec: number;
}
