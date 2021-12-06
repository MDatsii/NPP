import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /* @Get()
  get() {
    return this.appService.getHello()
    + '<br/>' + this.appService.getStrings()
    + '<br/>' + this.appService.getArrays()
    + '<br/>' + this.appService.getNumbers()
    + '<br/>' + this.appService.getEnum()
    + '<br/>' + this.appService.getMultipleArrays()
    + '<br/>' + this.appService.getMultipleValues();
  } */

  @Get()
  get() {
    return this.appService.getHello();
  }
}
