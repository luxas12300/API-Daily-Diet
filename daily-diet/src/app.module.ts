import { Module } from '@nestjs/common';
import { UserModule } from './infra/http/modules/user/UserModule';
import { DatabasModule } from './infra/database/prisma/database.module';
import { AuthModule } from './infra/http/modules/auth/Auth.module';

@Module({
  imports: [DatabasModule,UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
