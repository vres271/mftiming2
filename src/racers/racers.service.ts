import { Racer } from './entities/racer.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRacerDto } from './dto/create-racer.dto';
import { UpdateRacerDto } from './dto/update-racer.dto';
import { Repository } from 'typeorm';

@Injectable()
export class RacersService {
  constructor(
    @InjectRepository(Racer)
    private racersRepository: Repository<Racer>,
  ) {}

  async create(createRacerDto: CreateRacerDto) {
    return this.racersRepository.save(createRacerDto)
      .then(racer=>{
        return racer;
      })
  }

  findAll() {
    return this.racersRepository.find()
      .then(items=>items.map(racer=>{
        return racer;
      }))
  }

  findOne(findOptions:{id: number}) {
    return this.racersRepository.findOne({where:findOptions})
      .then(racer=>{
        return racer;
      })
  }

  async update(id: number, updateRacerDto: UpdateRacerDto) {
    return this.racersRepository.update(id, updateRacerDto)
  }

  remove(id: number) {
    return this.racersRepository.delete(id)
  }

}
