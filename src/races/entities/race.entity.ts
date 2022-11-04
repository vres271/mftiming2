import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Race {

    @PrimaryGeneratedColumn()
    id: number;
  
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

}
