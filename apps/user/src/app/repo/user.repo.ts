import { Injectable } from '@nestjs/common';
import { DBService } from '@e-commerce/libs';
import { CreateUserData, UpdateUserData } from '../app.schema';

@Injectable()
export class UserRepo {
  constructor(private db: DBService) {}

  create(data: CreateUserData) {
    return this.db
      .insertInto('user')
      .values(data)
      .returningAll()
      .executeTakeFirstOrThrow();
  }

  findAll() {
    return this.db.selectFrom('user').selectAll().execute();
  }

  findById(id: string) {
    return this.db
      .selectFrom('user')
      .where('id', '=', id)
      .selectAll()
      .executeTakeFirstOrThrow();
  }

  update(id: string, data: UpdateUserData) {
    return this.db
      .updateTable('user')
      .where('id', '=', id)
      .set(data)
      .executeTakeFirstOrThrow();
  }
}
