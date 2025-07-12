import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // para que solo recibir los datos que tenemos en el modelo
      whitelist: true,
      // para mostrar que los campos que estan enviando no existen entonces los 2 deben trabajar en conjunto
      forbidNonWhitelisted: true,
    }) 
  )
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
