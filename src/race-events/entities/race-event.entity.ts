import { Racer } from './../../racers/entities/racer.entity';
import { Race } from './../../races/entities/race.entity';
import { User } from './../../users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RaceEvent {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    type: number = 0;

    @Column()
    racerId: number = 0;

    @Column()
    raceId: number = 0;

    @ManyToOne(() => Race, (race) => race.raceEvents)
    race: Race    

    @ManyToOne(() => Racer, (racer) => racer.raceEvents)
    racer: Racer    

}