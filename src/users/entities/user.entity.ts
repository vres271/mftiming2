import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, AfterLoad } from 'typeorm';

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

  @Column('date')
  birthDate: string = '';

  @BeforeInsert()
  convertDate2() {
    this.birthDate = this.birthDate.split('T')[0]
  }

  @BeforeUpdate()
  convertDate() {
    this.birthDate = this.birthDate.split('T')[0]
  }

  @AfterLoad()
  convertDate3() {
    this.birthDate = this.birthDate+'T00:00:00.000'
  }  


}