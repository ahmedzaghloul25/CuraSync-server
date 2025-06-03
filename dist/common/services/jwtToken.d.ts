import { JwtService } from "@nestjs/jwt";
import { TYPES } from "common/types";
import { JwtPayload } from "jsonwebtoken";
export declare class JwtToken {
    private jwtService;
    constructor(jwtService: JwtService);
    createToken(payload: TYPES.TokenPayload): Promise<string>;
    verifyToken(token: string): Promise<TYPES.TokenPayload & JwtPayload>;
}
