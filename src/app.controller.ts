import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { Controller, Get, Request, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/auth.module';


@Controller()
export class AppController {
  
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    ) {}

  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('auth/logout')
  @HttpCode(204)
  async logout(@Request() req) {
    return this.authService.logOut(req.user);
  }

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
