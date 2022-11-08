import { Season } from './entities/season.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSeasonDto } from './dto/create-season.dto';
import { UpdateSeasonDto } from './dto/update-season.dto';
import { Repository } from 'typeorm';


@Injectable()
export class SeasonsService {
  constructor(
    @InjectRepository(Season)
    private seasonsRepository: Repository<Season>,
  ) {}

  async create(createSeasonDto: CreateSeasonDto) {

    const season = new Season()
    if(createSeasonDto.name!==undefined) season.name = createSeasonDto.name
    return this.seasonsRepository.save(season)
      .then(season=>{
        return season;
      })
  }

  findAll() {
    return this.seasonsRepository.find()
      .then(items=>items.map(season=>{
        return season;
      }))
  }

  findOne(findOptions:{id: number}) {
    return this.seasonsRepository.findOne({where:findOptions})
      .then(season=>{
        return season;
      })
  }

  async update(id: number, updateSeasonDto: UpdateSeasonDto) {
    return this.seasonsRepository.update(id, updateSeasonDto)
  }

  remove(id: number) {
    return this.seasonsRepository.delete(id)
  }

}
