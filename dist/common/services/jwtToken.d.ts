import { JwtService } from "@nestjs/jwt";
import { TokenPayload } from "common/types";
import { JwtPayload } from "jsonwebtoken";
export declare class JwtToken {
    private jwtService;
    constructor(jwtService: JwtService);
    createToken(payload: TokenPayload): Promise<string>;
    verifyToken(token: string): Promise<TokenPayload & JwtPayload>;
}
