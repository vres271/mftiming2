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

  async create(createUserDto: CreateUserDto) {

    const user = new User()
    if(createUserDto.login!==undefined) user.login = createUserDto.login
    if(createUserDto.password) {
      user.password = await bcrypt.hash(createUserDto.password, 10);
    }
    if(createUserDto.firstName!==undefined) user.firstName = createUserDto.firstName
    if(createUserDto.secondName!==undefined) user.secondName = createUserDto.secondName
    if(createUserDto.thirdName!==undefined) user.thirdName = createUserDto.thirdName
    if(createUserDto.isActive!==undefined) user.isActive = createUserDto.isActive
    if(createUserDto.roles!==undefined) user.roles = createUserDto.roles
    if(createUserDto.birthDate!==undefined) user.birthDate = createUserDto.birthDate
    return this.usersRepository.save(user)
      .then(user=>{
        delete user.password; 
        return user;
      })
  }

  findAll() {
    return this.usersRepository.find()
      .then(items=>items.map(user=>{
        delete user.password; 
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
    if(updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }
    return this.usersRepository.update(id, updateUserDto)
  }

  remove(id: number) {
    return this.usersRepository.delete(id)
  }
}
