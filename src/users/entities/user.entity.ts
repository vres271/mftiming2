import { Role } from './../../auth/roles/role.enum';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
  private _roles: string = '';

  get roles():Role[] {return this._roles.split(',') as Role[]}; //[Role.Admin]
  set roles(value:Role[]) {this._roles = value.join(',')};
  

}