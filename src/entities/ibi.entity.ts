import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ibi {
    @PrimaryGeneratedColumn({ type: 'integer' })
    id: number;

    @Column()
    name: string;

    @Column()
    attack: number;

    @Column()
    attackvsbuilding: number;

    @Column({ default: 0 })
    attackbonus: number;

    @Column({ default: 0 })
    defensebonus: number;

    @Column()
    defense: number;

    @Column()
    carry: number;

    @Column()
    hitpoints: number;

    @Column()
    mana: number;

    @Column()
    exp: number;
}
