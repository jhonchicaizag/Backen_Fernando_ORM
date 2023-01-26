import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api'); //cambia el prefijo global para ingresar a la api

  app.useGlobalPipes( // sirve para usar los diferentes Pipes como el PipeUUID entre otros
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(3003);
}
bootstrap();
