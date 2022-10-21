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
    user.login = createUserDto.login
    user.firstName = createUserDto.firstName
    user.secondName = createUserDto.secondName
    user.thirdName = createUserDto.thirdName
    user.isActive = createUserDto.isActive

    return this.usersRepository.save(user)

  }

  findAll() {
    this.create({ 
      login:'vres271',
      firstName: 'Chepurnoy',
      secondName: 'Nikita',
      thirdName: 'Sergeevich',
      isActive: false,
    });
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
