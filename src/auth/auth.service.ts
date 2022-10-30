import { Role } from './roles/role.enum';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(login: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByLogin({login});
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.login, sub: user.id, roles:user.roles.split(',') };
    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }

  async logOut(user: any) {
    return {success:true}
  }
    
  async authMe(user: any) {
    const fullUser = await this.usersService.findOne({id:user.userId});
    return {
      auth:true,
      user:fullUser
    };
  }
    
}