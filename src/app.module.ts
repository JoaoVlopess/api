import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './database/prisma/prisma.service';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [AuthModule, ClientsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
