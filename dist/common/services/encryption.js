"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encryption = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const util_1 = require("util");
let Encryption = class Encryption {
    password = process.env.ENCRYPTION_PASS;
    salt;
    async onModuleInit() {
        this.salt = (0, crypto_1.randomBytes)(16).toString("hex");
        console.log("salt generated is ", this.salt);
    }
    async encryptData(data) {
        const iv = (0, crypto_1.randomBytes)(16);
        const key = (await (0, util_1.promisify)(crypto_1.scrypt)(this.password, this.salt, 32));
        const cipher = (0, crypto_1.createCipheriv)("aes-256-ctr", key, iv);
        const encryptedText = Buffer.concat([cipher.update(data), cipher.final()]);
        return Buffer.concat([iv, encryptedText]);
    }
    async decryptData(encryptedData) {
        const iv = encryptedData.subarray(0, 16);
        const encryptedContent = encryptedData.subarray(16);
        const key = (await (0, util_1.promisify)(crypto_1.scrypt)(this.password, this.salt, 32));
        const decipher = (0, crypto_1.createDecipheriv)("aes-256-ctr", key, iv);
        const decryptedText = Buffer.concat([
            decipher.update(encryptedContent),
            decipher.final(),
        ]);
        return decryptedText.toString();
    }
};
exports.Encryption = Encryption;
exports.Encryption = Encryption = __decorate([
    (0, common_1.Injectable)()
], Encryption);
//# sourceMappingURL=encryption.js.map