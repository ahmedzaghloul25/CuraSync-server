"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploader = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("../utils");
let FileUploader = class FileUploader {
    constructor() { }
    _cloudinary = (0, utils_1.cloudinaryConfig)();
    async uploadFile(file, options) {
        if (!file) {
            throw new common_1.UnauthorizedException("file must be provided");
        }
        return await this._cloudinary.uploader.upload(file.path, options);
    }
    async deleteFile(public_id) {
        return await this._cloudinary.uploader.destroy(public_id);
    }
};
exports.FileUploader = FileUploader;
exports.FileUploader = FileUploader = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FileUploader);
//# sourceMappingURL=uploadFile.js.map