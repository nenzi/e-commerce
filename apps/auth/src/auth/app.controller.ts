import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './app.service';
import { LoginData, LoginSchema } from './app.schema';
import { ApiBody } from '@nestjs/swagger';
import { zodToApi } from '@e-commerce/libs';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiBody({ schema: zodToApi(LoginSchema) })
  async login(@Body(LoginSchema) data: LoginData) {
    return this.authService.login(data);
  }
}
