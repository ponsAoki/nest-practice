import { HttpModule } from '@nestjs/axios';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cat.controller';
import { CatsModule } from './cats/cats.module';
import { logger } from './logger.middleware';
// import { LoggerMiddleWare } from './logger.middleware';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(logger)
    .exclude(
      {path: "cats",  method: RequestMethod.POST}
    )
    .forRoutes(CatsController)
  }
}
