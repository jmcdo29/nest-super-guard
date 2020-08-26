import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtGuard } from './jwt.guard';
import { BasicGuard } from './basic.guard';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, JwtGuard, BasicGuard],
})
export class AppModule {}
