import { NextFunction } from 'express';

//クラスで書くバージョン
// @Injectable()
// export class LoggerMiddleWare implements NestMiddleware {
//     use(req: Request, res: Response, next: NextFunction) {
//         console.log("Request...");
//         next()
//     }
// }

//関数で書くバージョン
export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log('request...');
  next();
};
