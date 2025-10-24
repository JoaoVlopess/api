import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe({
    whitelist: true,           // remove campos não declarados no DTO
    forbidNonWhitelisted: false, // (opcional) se true, dá 400 quando vier campo extra
    transform: true,           // converte tipos primitivos (ex.: "1" → 1)
  }));
  
  app.enableCors({ origin: 'http://localhost:5173', credentials: true });
  await app.listen(4020);
}
bootstrap();