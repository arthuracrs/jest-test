import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('test-topic')
  processsMessage(@Payload() message: any): any {
    console.log(message.value);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
