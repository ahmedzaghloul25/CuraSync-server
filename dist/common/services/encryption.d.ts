import { OnModuleInit } from "@nestjs/common";
export declare class Encryption implements OnModuleInit {
    private password;
    private salt;
    onModuleInit(): Promise<void>;
    encryptData(data: string): Promise<Buffer>;
    decryptData(encryptedData: Buffer): Promise<string>;
}
