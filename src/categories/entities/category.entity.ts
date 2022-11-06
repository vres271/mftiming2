import { Racer } from './../../racers/entities/racer.entity';
import { Season } from './../../seasons/entities/season.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string = '';
  
    @Column({type: 'int', nullable: true})
    ageFrom: number|null;
  
    @Column({type: 'int', nullable: true})
    ageTo: number|null;
  
    @ManyToOne(() => Season, (season) => season.races)
    season: Season    

    @OneToMany(() => Racer, (racer) => racer.category)
    racers: Racer[]


}
