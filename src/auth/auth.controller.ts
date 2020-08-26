import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  login(
    @Body() { userid, password }: { userid: string; password: string },
  ): string {
    return this.authService.getJwt(Number.parseInt(userid), password);
  }
}
