import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Race } from '../dto/user.dto';

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar' })
    race: Race;
}
