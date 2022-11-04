import { Race } from './entities/race.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRaceDto } from './dto/create-race.dto';
import { UpdateRaceDto } from './dto/update-race.dto';
import { Repository } from 'typeorm';


@Injectable()
export class RacesService {
  constructor(
    @InjectRepository(Race)
    private categoriesRepository: Repository<Race>,
  ) {}

  async create(createRaceDto: CreateRaceDto) {

    const race = new Race()
    if(createRaceDto.name!==undefined) race.name = createRaceDto.name
    if(createRaceDto.start!==undefined) race.start = createRaceDto.start
    if(createRaceDto.end!==undefined) race.end = createRaceDto.end
    return this.categoriesRepository.save(race)
      .then(race=>{
        return race;
      })
  }

  findAll() {
    return this.categoriesRepository.find()
      .then(items=>items.map(race=>{
        return race;
      }))
  }

  findOne(findOptions:{id: number}) {
    return this.categoriesRepository.findOne({where:findOptions})
      .then(race=>{
        return race;
      })
  }

  async update(id: number, updateRaceDto: UpdateRaceDto) {
    return this.categoriesRepository.update(id, updateRaceDto)
  }

  remove(id: number) {
    return this.categoriesRepository.delete(id)
  }

}
