import { Race } from './entities/race.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { RacesService } from './races.service';
import { RacesController } from './races.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Race])],
  controllers: [RacesController],
  providers: [RacesService],
  exports: [RacesService],  
})
export class RacesModule {}
