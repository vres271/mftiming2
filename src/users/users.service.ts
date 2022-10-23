import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {

    const user = new User()
    if(createUserDto.login!==undefined) user.login = createUserDto.login
    if(createUserDto.password!==undefined) user.password = createUserDto.password
    if(createUserDto.firstName!==undefined) user.firstName = createUserDto.firstName
    if(createUserDto.secondName!==undefined) user.secondName = createUserDto.secondName
    if(createUserDto.thirdName!==undefined) user.thirdName = createUserDto.thirdName
    if(createUserDto.isActive!==undefined) user.isActive = createUserDto.isActive
    return this.usersRepository.save(user)

  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(findOptions:{id: number}|{login:string}) {
    return this.usersRepository.findOne({where:findOptions})
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto)
  }

  remove(id: number) {
    return this.usersRepository.delete(id)
  }
}
