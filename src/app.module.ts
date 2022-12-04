import { RaceEvent } from './race-events/entities/race-event.entity';
import { Season } from './seasons/entities/season.entity';
import { Racer } from './racers/entities/racer.entity';
import { Race } from './races/entities/race.entity';
import { Category } from './categories/entities/category.entity';
import { User } from './users/entities/user.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { RacesModule } from './races/races.module';
import { RacersModule } from './racers/racers.module';
import { RaceEventsModule } from './race-events/race-events.module';
import { SeasonsModule } from './seasons/seasons.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123123123',
      database: 'mftiming2',
      entities: [User,Category,Race,Racer,RaceEvent,Season],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    CategoriesModule,
    RacesModule,
    RacersModule,
    RaceEventsModule,
    SeasonsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService
      
  ],
})
export class AppModule {}


