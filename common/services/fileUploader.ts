import {
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from "@nestjs/common";
import { UploadApiOptions } from "cloudinary";
import { cloudinaryConfig } from "common/utils";

@Injectable()
export class FileUploader {
  constructor(private logger: Logger) {}
  private _cloudinary = cloudinaryConfig();

  async uploadFile(file: Express.Multer.File, options: UploadApiOptions) {
    try {
      this.logger.log(`[FileUploader] uploading file ${file.originalname}`);
      const result = await this._cloudinary.uploader.upload(file.path, options);
      this.logger.log(
        `[FileUploader] file ${file.originalname} uploaded successfully`
      );
      return result;
    } catch (error) {
      this.logger.error(
        `[FileUploader] Failed to upload file ${file.originalname}`,
        error.stack || error.toString()
      );
      throw new InternalServerErrorException("Failed to upload file");
    }
  }

  async uploadFiles(files: Express.Multer.File[], options: UploadApiOptions) {
    const result = files.map(
      async (file) => await this.uploadFile(file, options)
    );
    return Promise.all(result);
  }

  async deleteFile(public_id: string) {
    try {
      this.logger.warn(
        `[FileUploader] Deleting file with ID: ${public_id}`,
        "FileUploader"
      );
      const result = await this._cloudinary.uploader.destroy(public_id);
      this.logger.log(
        `[FileUploader] file ID: ${public_id} deleted successfully`,
        "FileUploader"
      );
      return result;
    } catch (error) {
      this.logger.error(
        `[FileUploader] Failed to delete file ID: ${public_id}`,
        error.stack || error.toString()
      );
      throw new InternalServerErrorException("Failed to delete file");
    }
  }
}
