import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy } from 'passport-http';
import { AuthService } from './auth.service';

@Injectable()
export class BasicNestStrategy extends PassportStrategy(BasicStrategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  validate(userid: string, password: string): Record<string, any> {
    return this.authService.findByIdAndPass(Number.parseInt(userid), password);
  }
}
