import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { BasicNestStrategy } from './basic.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'superSecret',
    }),
  ],
  providers: [AuthService, JwtStrategy, BasicNestStrategy],
  controllers: [AuthController],
  exports: [JwtStrategy, BasicNestStrategy]
})
export class AuthModule {}
