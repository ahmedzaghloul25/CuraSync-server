import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { TYPES } from "common/types";
import {JwtPayload } from "jsonwebtoken";

@Injectable()
export class JwtToken {
  constructor(private jwtService: JwtService) {}

  async createToken(payload: TYPES.TokenPayload) {
    const token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET_ACCESS,
    });
    return token;
  }

  async verifyToken(token: string): Promise<TYPES.TokenPayload & JwtPayload> {
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET_ACCESS,
      });
      return payload;
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        throw new UnauthorizedException("Token has expired");
      }
      if (error.name === "JsonWebTokenError") {
        throw new UnauthorizedException("Invalid token format");
      }
      throw new UnauthorizedException("Token verification failed");
    }
  }
}
