import { CommonProps } from "common";
import { HydratedDocument, Types } from "mongoose";
export declare class Transfer extends CommonProps {
    transferFrom: Types.ObjectId;
    transferTo: Types.ObjectId;
    status: string;
}
export declare const TransferSchema: import("mongoose").Schema<Transfer, import("mongoose").Model<Transfer, any, any, any, import("mongoose").Document<unknown, any, Transfer, any> & Transfer & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Transfer, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Transfer>, {}> & import("mongoose").FlatRecord<Transfer> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const TransferModule: import("@nestjs/common").DynamicModule;
export type TransferDocument = HydratedDocument<Transfer>;
