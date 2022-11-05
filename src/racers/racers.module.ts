import { Racer } from './entities/racer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { RacersService } from './racers.service';
import { RacersController } from './racers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Racer])],
  controllers: [RacersController],
  providers: [RacersService],
  exports: [RacersService],  
})
export class RacersModule {}