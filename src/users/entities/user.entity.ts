import { Category } from './../../categories/entities/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, AfterLoad, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  login: string = '';

  @Column()
  password?: string = '';

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

  @Column({
    type: 'date',
    nullable: true,
  })
  birthDate: string|null = '';

  categoriesIds: number[]

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[]
  
  @BeforeInsert()
  convertDate2() {
    this.birthDate = this.birthDate?this.birthDate.split('T')[0]:null
  }

  @BeforeUpdate()
  convertDate() {
    this.birthDate = this.birthDate?this.birthDate.split('T')[0]:null
  }

  @AfterLoad()
  convertDate3() {
    this.birthDate = this.birthDate
  }  


}