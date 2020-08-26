import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private users = [
    {
      userid: 1,
      password: 'changeme',
    },
    {
      userid: 2,
      password: 'something',
    },
    {
      userid: 3,
      password: 'different',
    },
  ];

  constructor(private readonly jwt: JwtService) {}

  findByPayload(id: number): { userid: number; password: string } {
    return this.users.find(u => u.userid === id);
  }

  findByIdAndPass(
    id: number,
    password: string,
  ): { userid: number; password: string } {
    return this.users.find(u => u.userid === id && u.password === password);
  }

  getJwt(userid: number, password: string) {
    const user = this.users.find(
      u => u.userid === userid && u.password === password,
    );
    return this.jwt.sign({ userid: user.userid });
  }
}
