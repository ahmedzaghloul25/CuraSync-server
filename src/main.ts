import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import helmet from 'helmet';
import { doubleCsrf } from 'csrf-csrf';



async function bootstrap() {
//   const {
//   invalidCsrfTokenError, // This is provided purely for convenience if you plan on creating your own middleware.
//   generateToken, // Use this in your routes to generate and provide a CSRF hash, along with a token cookie and token.
//   validateRequest, // Also a convenience if you plan on making your own middleware.
//   doubleCsrfProtection, // This is the default CSRF protection middleware.
// } = doubleCsrf();
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000
  app.use(helmet())
  // app.use(doubleCsrfProtection)
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
