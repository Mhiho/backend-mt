import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';
import { Race } from './dto/create.user.dto';

type Message = {
    title: string;
    content: string;
    correspondant: string;
    received: boolean;
    sent: boolean;
    read: boolean;
};

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', unique: true })
    username: string;

    @Column({ type: 'varchar', unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    race: Race;

    @Column({ type: 'integer', array: true })
    ownvillages: number[];

    @Column({ type: 'integer', array: true, default: [] })
    onwcastles: number[];

    @Column({ nullable: true })
    gamestart: string;

    @Column({ default: './avatars/warior' })
    avatarpath: string;

    @Column({ default: 1 })
    dragoncrystals: number;

    @Column({ type: 'jsonb', default: [] })
    messages: Message[];
}
