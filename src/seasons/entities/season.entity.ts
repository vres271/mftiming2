import { Category } from './../../categories/entities/category.entity';
import { Race } from './../../races/entities/race.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Season {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @OneToMany(() => Race, (race) => race.season)
    races: Race[]

    @OneToMany(() => Category, (category) => category.season)
    categories: Category[]



}