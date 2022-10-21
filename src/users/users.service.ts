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
    if(createUserDto.firstName!==undefined) user.firstName = createUserDto.firstName
    if(createUserDto.secondName!==undefined) user.secondName = createUserDto.secondName
    if(createUserDto.thirdName!==undefined) user.thirdName = createUserDto.thirdName
    if(createUserDto.isActive!==undefined) user.isActive = createUserDto.isActive
    return this.usersRepository.save(user)

  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
