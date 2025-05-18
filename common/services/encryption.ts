import { Injectable, OnModuleInit } from "@nestjs/common";
import { createCipheriv, randomBytes, scrypt, createDecipheriv } from "crypto";
import { promisify } from "util";

@Injectable()
export class Encryption implements OnModuleInit {
  private password = process.env.ENCRYPTION_PASS!;
  private salt: string;

  async onModuleInit() {
    this.salt = randomBytes(16).toString("hex");
    console.log("salt generated is ", this.salt);
  }

  async encryptData(data: string): Promise<Buffer> {
    const iv = randomBytes(16);
    const key = (await promisify(scrypt)(
      this.password,
      this.salt,
      32
    )) as Buffer;
    const cipher = createCipheriv("aes-256-ctr", key, iv);
    const encryptedText = Buffer.concat([cipher.update(data), cipher.final()]);
    return Buffer.concat([iv, encryptedText]);
  }

  async decryptData(encryptedData: Buffer): Promise<string> {
    const iv = encryptedData.subarray(0, 16);
    const encryptedContent = encryptedData.subarray(16);
    const key = (await promisify(scrypt)(
      this.password,
      this.salt,
      32
    )) as Buffer;
    const decipher = createDecipheriv("aes-256-ctr", key, iv);
    const decryptedText = Buffer.concat([
      decipher.update(encryptedContent),
      decipher.final(),
    ]);
    return decryptedText.toString();
  }
}
