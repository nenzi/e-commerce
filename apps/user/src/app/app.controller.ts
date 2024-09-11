import { Body, Controller, Get, Post, Put } from '@nestjs/common';

import { AppService } from './app.service';
import { ApiBody } from '@nestjs/swagger';
import { Authenticated, zodToApi } from '@e-commerce/libs';
import { CreateUserData, createUserSchema } from './app.schema';
import { UserData } from '@e-commerce/db/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('sign-up')
  @ApiBody({ schema: zodToApi(createUserSchema) })
  async signUp(@Body(createUserSchema) data: CreateUserData) {
    return this.appService.create(data);
  }
}
