import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

// Every origin the browser may load the site from. Both the apex and the www
// host are listed because www does NOT redirect to the apex: a visitor on
// www.iyerspoojaproducts.com calling the apex API is a cross-origin request,
// and if it is not allowed here the browser blocks it and every package table
// renders empty. The production hosts are hardcoded on purpose so a wrong or
// missing FRONTEND_URL on the server cannot break the live site.
const ALLOWED_ORIGINS = [
  'https://iyerspoojaproducts.com',
  'https://www.iyerspoojaproducts.com',
  'http://localhost:3000',
  process.env.FRONTEND_URL,
].filter((o): o is string => Boolean(o));

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.enableCors({
    origin: (
      origin: string | undefined,
      callback: (err: Error | null, allow?: boolean) => void,
    ) => {
      // No Origin header = same-origin navigation, curl, health check, etc.
      if (!origin || ALLOWED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }
      // Refuse without throwing: the header is simply omitted and the browser
      // blocks the response, rather than the request 500-ing.
      return callback(null, false);
    },
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
