import { RaceEvent } from './entities/race-event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { RaceEventsService } from './race-events.service';
import { RaceEventsController } from './race-events.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RaceEvent])],
  controllers: [RaceEventsController],
  providers: [RaceEventsService],
  exports: [RaceEventsService],  
})
export class RaceEventsModule {}