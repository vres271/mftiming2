import { RaceEvent } from './entities/race-event.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRaceEventDto } from './dto/create-race-event.dto';
import { UpdateRaceEventDto } from './dto/update-race-event.dto';
import { Repository } from 'typeorm';


@Injectable()
export class RaceEventsService {
  constructor(
    @InjectRepository(RaceEvent)
    private raceEventsRepository: Repository<RaceEvent>,
  ) {}

  async create(createRaceEventDto: CreateRaceEventDto) {

    const raceEvent = new RaceEvent()
    if(createRaceEventDto.type!==undefined) raceEvent.type = createRaceEventDto.type
    if(createRaceEventDto.raceId!==undefined) raceEvent.raceId = createRaceEventDto.raceId
    if(createRaceEventDto.racerId!==undefined) raceEvent.racerId = createRaceEventDto.racerId
    return this.raceEventsRepository.save(raceEvent)
      .then(raceEvent=>{
        return raceEvent;
      })
  }

  findAll() {
    return this.raceEventsRepository.find()
      .then(items=>items.map(raceEvent=>{
        return raceEvent;
      }))
  }

  findOne(findOptions:{id: number}) {
    // return this.raceEventsRepository.findOne({where:findOptions})
    //   .then(raceEvent=>{
    //     return raceEvent;
    //   })
  }

  async update(id: number, updateRaceEventDto: UpdateRaceEventDto) {
    return this.raceEventsRepository.update(id, updateRaceEventDto)
  }

  remove(id: number) {
    return this.raceEventsRepository.delete(id)
  }

}
