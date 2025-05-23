import { JwtService } from "@nestjs/jwt";
import { _Types } from "common";
import { JwtPayload } from "jsonwebtoken";
export declare class JwtToken {
    private jwtService;
    constructor(jwtService: JwtService);
    createToken(payload: _Types.TYPES.TokenPayload): Promise<string>;
    verifyToken(token: string): Promise<_Types.TYPES.TokenPayload & JwtPayload>;
}
