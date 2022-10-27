import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string = '';

  @Column()
  password: string = '';

  @Column()
  firstName: string = '';

  @Column()
  secondName: string = '';

  @Column()
  thirdName: string = '';

  @Column({ default: true })
  isActive: boolean = false;

  @Column()
  roles: string = '';

  // @Column('date')
  // birthDate: string = '';

  // @BeforeInsert()
  // convertDate2() {
  //   this.birthDate = '2022-10-27'
  // }

  // @BeforeUpdate()
  // convertDate() {
  //   this.birthDate = '2022-10-27'
  // }


}