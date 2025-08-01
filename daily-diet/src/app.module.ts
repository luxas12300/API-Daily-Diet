import { Module } from '@nestjs/common';
import { UserModule } from './infra/http/modules/user/UserModule';
import { DatabasModule } from './infra/database/prisma/database.module';
import { AuthModule } from './infra/http/modules/auth/Auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './infra/http/modules/auth/guards/JwtAuthGuard';

@Module({
  imports: [DatabasModule,UserModule, AuthModule],
  controllers: [],
  providers: [
     {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
    }
  ],
})
export class AppModule {}
