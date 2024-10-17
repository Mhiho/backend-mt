import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Race } from './dto/create.user.dto';

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', unique: true })
    username: string;

    @Column({ type: 'varchar', unique: true })
    email: string;

    @Column()
    race: Race;

    @Column()
    password: string;
}
