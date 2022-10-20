import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  firstName: string;

  @Column()
  secondName: string;

  @Column()
  thirdName: string;

  @Column({ default: true })
  isActive: boolean;
}