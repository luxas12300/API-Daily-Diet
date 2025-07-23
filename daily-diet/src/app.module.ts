import { Module } from '@nestjs/common';
import { UserModule } from './infra/http/modules/user/UserModule';
import { DatabasModule } from './infra/database/prisma/database.module';

@Module({
  imports: [DatabasModule,UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
