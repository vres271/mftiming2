import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
  

}
