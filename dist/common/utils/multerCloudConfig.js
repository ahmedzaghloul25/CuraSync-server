"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerCloudConfig = void 0;
const common_1 = require("@nestjs/common");
const multer_1 = require("multer");
const multerCloudConfig = ({ allowedCategory, limits, sizeLimit = 10, }) => {
    const storage = (0, multer_1.diskStorage)({});
    const fileFilter = (req, file, cb) => {
        if (!allowedCategory.includes(file.mimetype)) {
            cb(new common_1.BadRequestException('File extension not allowed'), false);
        }
        cb(null, true);
    };
    limits = { fileSize: sizeLimit * 1024 * 1024 };
    return { storage, fileFilter, limits };
};
exports.multerCloudConfig = multerCloudConfig;
//# sourceMappingURL=multerCloudConfig.js.map