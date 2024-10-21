import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lori {
    @PrimaryGeneratedColumn({ type: 'integer' })
    id: number;

    @Column()
    name: string;

    @Column()
    attack: number;

    @Column()
    attackvsbuilding: number;

    @Column()
    defense: number;

    @Column({ default: 0 })
    attackbonus: number;

    @Column({ default: 0 })
    defensebonus: number;

    @Column({ default: 0 })
    mana: number;

    @Column()
    hitpoints: number;

    @Column()
    carry: number;

    @Column()
    exp: number;
}
