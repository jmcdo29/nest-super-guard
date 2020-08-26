import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BasicGuard } from './basic.guard';
import { JwtGuard } from './jwt.guard';

@Injectable()
export class ApiGuard implements CanActivate {
  constructor(
    private readonly basicGuard: BasicGuard,
    private readonly jwtGuard: JwtGuard,
  ) {}

  async canActivate(context: ExecutionContext) {
    try {
      const jwtRes = (await this.jwtGuard.canActivate(context)) as boolean;
      if (jwtRes) {
        return true;
      }
    } catch (err) {
      return this.basicGuard.canActivate(context) as Promise<boolean>;
    }
  }
}
