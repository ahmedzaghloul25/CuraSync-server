import { Logger } from "@nestjs/common";
import { UploadApiOptions } from "cloudinary";
export declare class FileUploader {
    private logger;
    constructor(logger: Logger);
    private _cloudinary;
    uploadFile(file: Express.Multer.File, options: UploadApiOptions): Promise<import("cloudinary").UploadApiResponse>;
    uploadFiles(files: Express.Multer.File[], options: UploadApiOptions): Promise<import("cloudinary").UploadApiResponse[]>;
    deleteFile(public_id: string): Promise<any>;
}
