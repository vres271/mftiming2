import { Category } from './../categories/entities/category.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUserEntity(item:any):Promise<User> {
    const user = new User()
    if(item.login!==undefined) user.login = item.login
    if(item.password) {
      user.password = await bcrypt.hash(item.password, 10);
    }
    if(item.firstName!==undefined) user.firstName = item.firstName
    if(item.secondName!==undefined) user.secondName = item.secondName
    if(item.thirdName!==undefined) user.thirdName = item.thirdName
    if(item.isActive!==undefined) user.isActive = item.isActive
    if(item.roles!==undefined) user.roles = item.roles
    if(item.birthDate!==undefined) user.birthDate = item.birthDate
    if(item.categoriesIds) user.categories = item.categoriesIds.map(id=>({... new Category(), id}))
    return user
  }

  async create(createUserDto: CreateUserDto) {
    const user = await this.createUserEntity(createUserDto)
    return this.usersRepository.save(user)
      .then(user=>{
        delete user.password; 
        return user;
      })
  }

  findAll() {
    return this.usersRepository.find({relations: {categories: true,}})
      .then(items=>items.map(user=>{
        delete user.password; 
        user.categoriesIds = user.categories.map(category=>category.id)
        delete user.categories
        return user;
      }))
  }

  findOne(findOptions:{id: number}) {
    return this.usersRepository.findOne({where:findOptions})
      .then(user=>{
        delete user.password; 
        return user;
      })
  }

  findOneByLogin(findOptions:{login:string}) {
    return this.usersRepository.findOne({where:findOptions})
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.createUserEntity(updateUserDto)
    return this.usersRepository.save({... user, id})
  }

  remove(id: number) {
    return this.usersRepository.delete(id)
  }
}
