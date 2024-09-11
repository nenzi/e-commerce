import { Global, Module } from '@nestjs/common';

import { UserRepo } from './user.repo';
import { DBService } from '@e-commerce/libs';

@Global()
@Module({
  imports: [],
  providers: [UserRepo, DBService],
  exports: [UserRepo],
})
export class RepoModule {}
