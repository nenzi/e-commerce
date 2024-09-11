import { Injectable } from '@nestjs/common';
import { CreateUserData } from './app.schema';
import { UserRepo } from './repo/user.repo';

@Injectable()
export class AppService {
  constructor(private repo: UserRepo) {}

  async create(data: CreateUserData) {
    return this.repo.create(data);
  }

  async findAll() {
    return this.repo.findAll();
  }

  async findById(id: string) {
    return this.repo.findById(id);
  }
}
