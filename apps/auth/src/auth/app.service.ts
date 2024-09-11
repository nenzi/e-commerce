import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { DBService } from '@e-commerce/libs';
import { LoginData } from './app.schema';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private dbService: DBService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    // Here you fetch and validate the user from DB
    const user = await this.dbService
      .selectFrom('user')
      .where('email', '=', email)
      .selectAll()
      .executeTakeFirstOrThrow();

    const isPasswordValid = await bcrypt.compare(pass, user.password);
    if (user && isPasswordValid) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(data: LoginData) {
    const { password, ...user } = await this.dbService
      .selectFrom('user')
      .where('email', '=', data.email)
      .selectAll()
      .executeTakeFirstOrThrow();

    const isPassword = bcrypt.compare(data.password, password);

    if (!isPassword)
      throw new HttpException('invalid password', HttpStatus.BAD_REQUEST);

    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
