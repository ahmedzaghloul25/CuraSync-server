"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const helmet_1 = require("helmet");
const nest_winston_1 = require("nest-winston");
const winston = require("winston");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const fs_1 = require("fs");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: nest_winston_1.WinstonModule.createLogger({
            transports: [
                new winston.transports.Console({
                    format: winston.format.combine(winston.format.timestamp(), winston.format.colorize(), winston.format.simple()),
                }),
                new winston.transports.File({
                    filename: "logs/info.log",
                    level: "info",
                    format: winston.format.combine(winston.format.timestamp(), winston.format.simple()),
                }),
                new winston.transports.File({
                    filename: "logs/warn.log",
                    level: "warn",
                    format: winston.format.combine(winston.format.timestamp(), winston.format.simple()),
                }),
                new winston.transports.File({
                    filename: "logs/error.log",
                    level: "error",
                    format: winston.format.combine(winston.format.timestamp(), winston.format.simple()),
                }),
            ],
            exceptionHandlers: [
                new winston.transports.File({
                    filename: "logs/exceptions.log",
                    format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
                }),
            ],
        }),
    });
    app.use(morgan("combined", {
        stream: {
            write: (str) => {
                (0, fs_1.appendFileSync)("logs/access.log", str);
            },
        },
    }));
    const port = process.env.PORT ?? 3000;
    app.use((0, helmet_1.default)());
    app.use(cookieParser());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    app.enableVersioning({ type: common_1.VersioningType.URI });
    await app.listen(port, () => {
        console.log(`server is running on port ${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map