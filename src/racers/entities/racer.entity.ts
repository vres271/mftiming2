import { Category } from './../../categories/entities/category.entity';
import { RaceEvent } from './../../race-events/entities/race-event.entity';
import { Race } from './../../races/entities/race.entity';
import { User } from './../../users/entities/user.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Racer {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, (user) => user.racers)
    user: User  

    @ManyToOne(() => Race, (race) => race.racers)
    race: Race 

    @ManyToOne(() => Category, (category) => category.racers)
    category: Category  

    @Column()
    userId: number = 0;

    @Column({length: 36})
    raceId: string;

    @Column()
    categoryId: number = 0;

    @OneToMany(() => RaceEvent, (raceEvent) => raceEvent.racer)
    raceEvents: RaceEvent[]
    

    // @BeforeUpdate()
    // @BeforeInsert()
    // convert() {
    //     this.user= new User;
    //     this.user.id = this.userId
    //     this.race= new Race;
    //     this.race.id = this.raceId

    //     delete this.userId
    //     delete this.raceId
    // }
  

}