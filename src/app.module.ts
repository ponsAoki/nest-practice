import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cat.controller';
import { CatsModule } from './cats/cats.module';
import { logger } from './logger.middleware';
// import { LoggerMiddleWare } from './logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    CatsModule,
    UsersModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
  exports: [UsersService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .exclude({ path: 'cats', method: RequestMethod.POST })
      .forRoutes(CatsController);
  }
}
