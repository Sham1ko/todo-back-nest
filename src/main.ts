import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);



  const config = new DocumentBuilder()
    .setTitle('API for Todos')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('todos')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();


  await app.listen(3000, () => console.log('Server started on port: 3000') );
}
bootstrap();
