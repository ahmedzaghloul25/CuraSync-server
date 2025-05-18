import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
interface MulterConfigOptions extends MulterOptions {
    allowedCategory: string[];
    sizeLimit?: number;
}
export declare const multerCloudConfig: ({ allowedCategory, limits, sizeLimit, }: MulterConfigOptions) => {
    storage: import("multer").StorageEngine;
    fileFilter: (req: Request, file: Express.Multer.File, cb: Function) => void;
    limits: {
        fieldNameSize?: number;
        fieldSize?: number;
        fields?: number;
        fileSize?: number;
        files?: number;
        parts?: number;
        headerPairs?: number;
    };
};
export {};
