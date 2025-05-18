import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000
  app.useGlobalPipes(new ValidationPipe({
    forbidNonWhitelisted : true,
    transform : true,
    transformOptions : {
      enableImplicitConversion : true
    }
  }))
  app.enableVersioning({type : VersioningType.URI})
  
  await app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);    
  });
}
bootstrap();
