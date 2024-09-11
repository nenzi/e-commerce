import { Injectable } from '@nestjs/common';
import { Kysely, ParseJSONResultsPlugin, PostgresDialect } from 'kysely';
import { Pool } from 'pg';
import * as process from 'node:process';
import { DB } from '@e-commerce/db/types';

@Injectable()
export class DBService extends Kysely<DB> {
  constructor() {
    const dialect = new PostgresDialect({
      pool: new Pool({ connectionString: process.env['DATABASE_URL'] }),
    });

    super({ dialect, plugins: [new ParseJSONResultsPlugin()] });
  }
}
