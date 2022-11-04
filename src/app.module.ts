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


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'Q2s$A1tPXpPG%9gqB40Jv',
      database: 'mftiming2',
      entities: [User,Category,Race],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    CategoriesModule,
    RacesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService
      
  ],
})
export class AppModule {}


