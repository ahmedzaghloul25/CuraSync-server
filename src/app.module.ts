import { Module, ValidationPipe } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { CatalogModule } from "./catalog/catalog.module";
import { TYPES } from "common/types";
import { minutes, ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";
import { HospitalModule } from './hospital/hospital.module';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers : [
        {
          ttl : minutes(1),
          limit : 70,
          blockDuration : minutes(5)
        }
      ]
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>("DB_HOSPITAL"),
      }),
      inject: [ConfigService],
      connectionName: TYPES.connectionNameString.HOSPITAL,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>("DB_CATALOG"),
      }),
      inject: [ConfigService],
      connectionName: TYPES.connectionNameString.CATALOG,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>("DB_SUPER"),
      }),
      inject: [ConfigService],
      connectionName: TYPES.connectionNameString.SUPER,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.cwd() + "/config/.env",
    }),
    AuthModule,
    CatalogModule,
    HospitalModule,
  ],
  controllers: [AppController],
  providers: [AppService, {provide : APP_GUARD, useClass : ThrottlerGuard}],
})
export class AppModule {}
