import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";

// export const createHash = (data: string,
//     salt_round: number = +process.env.SALT_ROUND!) : string => {
//     return bcrypt.hashSync(data, salt_round)
// }

// export const verifyHash = (data : string, hash : string) : boolean=>{
//     return bcrypt.compareSync(data, hash)
// }
@Injectable()
export class Hashing {
  constructor(private readonly salt: number) {
    salt = Number(process.env.SALT_ROUND);
  }
  createHash(data: string): string {
    return bcrypt.hashSync(data, this.salt);
  }
  verifyHash(data: string, hash: string): boolean {
    return bcrypt.compareSync(data, hash);
  }
}
