import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin:['http://localhost:5173'],
    methods: ['POST', 'GET',],
    credentials: true
});
  await app.listen(3000);
}
bootstrap();
