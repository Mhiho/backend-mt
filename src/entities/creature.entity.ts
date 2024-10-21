import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Creature {
    @PrimaryGeneratedColumn({ type: 'integer' })
    id: number;

    @Column()
    name: string;

    @Column()
    attack: number;

    @Column()
    defense: number;

    @Column()
    hitpoints: number;

    @Column()
    exp: number;
}
