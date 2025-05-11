import { CommonProps } from "common";
import { HydratedDocument, Types } from "mongoose";
export declare class File extends CommonProps {
    status: string;
}
export declare const FileSchema: import("mongoose").Schema<File, import("mongoose").Model<File, any, any, any, import("mongoose").Document<unknown, any, File, any> & File & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, File, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<File>, {}> & import("mongoose").FlatRecord<File> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const FileModule: import("@nestjs/common").DynamicModule;
export type FileDocument = HydratedDocument<File>;
