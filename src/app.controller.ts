import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiGuard } from './api.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(ApiGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
