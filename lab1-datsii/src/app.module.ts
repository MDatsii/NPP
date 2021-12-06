import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerController } from './controller/controller.controller';
import { ModuleModule } from './module/module.module';
import { ServiceService } from './service/service.service';

@Module({
  imports: [ModuleModule],
  controllers: [AppController, ControllerController],
  providers: [AppService, ServiceService],
})
export class AppModule {}
