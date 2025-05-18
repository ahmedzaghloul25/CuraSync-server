export declare class Hashing {
    private readonly salt;
    constructor(salt: number);
    createHash(data: string): string;
    verifyHash(data: string, hash: string): boolean;
}
