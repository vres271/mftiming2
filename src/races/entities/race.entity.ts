import { RaceEvent } from './../../race-events/entities/race-event.entity';
import { Season } from './../../seasons/entities/season.entity';
import { Racer } from './../../racers/entities/racer.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Race {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string = '';

    @Column({
        type: 'date',
        nullable: true,
      })
    start: string|null = null;

    @Column({
        type: 'date',
        nullable: true,
      })
    end: string|null = null;

    @OneToMany(() => Racer, (racer) => racer.user)
    racers: Racer[]

    @ManyToOne(() => Season, (season) => season.races)
    season: Season    
    
    @Column({nullable: true})
    seasonId: number = 0;


    @OneToMany(() => RaceEvent, (raceEvent) => raceEvent.race)
    raceEvents: RaceEvent[]
}
