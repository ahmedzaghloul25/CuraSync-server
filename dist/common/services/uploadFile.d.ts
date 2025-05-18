import { UploadApiOptions } from "cloudinary";
export declare class FileUploader {
    constructor();
    private _cloudinary;
    uploadFile(file: Express.Multer.File, options: UploadApiOptions): Promise<import("cloudinary").UploadApiResponse>;
    deleteFile(public_id: string): Promise<any>;
}
