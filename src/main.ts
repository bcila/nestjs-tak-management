import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
async function bootstrap() {
  const serverConfig = config.get('server');

  const app = await NestFactory.create(AppModule);

  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  }

  const PORT = process.env.PORT || serverConfig.port;
  await app.listen(PORT);
}
bootstrap();
