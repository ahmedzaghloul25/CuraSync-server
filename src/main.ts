import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConsoleLogger, ValidationPipe, VersioningType } from "@nestjs/common";
import helmet from "helmet";
import { doubleCsrf } from "csrf-csrf";
import { WinstonModule } from "nest-winston";
import * as winston from "winston";
import * as morgan from "morgan";
import * as cookieParser from 'cookie-parser';
import { appendFileSync } from "fs";
import { from } from "rxjs";

async function bootstrap() {
  //   const {
  //   invalidCsrfTokenError, // This is provided purely for convenience if you plan on creating your own middleware.
  //   generateToken, // Use this in your routes to generate and provide a CSRF hash, along with a token cookie and token.
  //   validateRequest, // Also a convenience if you plan on making your own middleware.
  //   doubleCsrfProtection, // This is the default CSRF protection middleware.
  // } = doubleCsrf();
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.colorize(),
            winston.format.simple()
          ),
        }),
        new winston.transports.File({
          filename: "logs/info.log",
          level: "info",
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.simple()
          ),
        }),
        new winston.transports.File({
          filename: "logs/warn.log",
          level: "warn",
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.simple()
          ),
        }),
        new winston.transports.File({
          filename: "logs/error.log",
          level: "error",
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.simple()
          ),
        }),
      ],
      exceptionHandlers: [
        new winston.transports.File({
          filename: "logs/exceptions.log",
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
          ),
        }),
      ],
    }),
  });
  app.use(
    morgan("combined", {
      stream: {
        write: (str) => {
          appendFileSync("logs/access.log", str);
        },
      },
    })
  );
  const port = process.env.PORT ?? 3000;
  app.use(helmet());
  app.use(cookieParser())
  // app.use(doubleCsrfProtection)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    })
  );
  app.enableVersioning({ type: VersioningType.URI });

  await app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
}
bootstrap();
