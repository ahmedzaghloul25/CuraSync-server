import { CommonProps } from "common";
import { HydratedDocument, Types } from "mongoose";
export declare class Unit extends CommonProps {
    name: string;
    description: string;
    bedCount: number;
    department: Types.ObjectId;
}
export declare const UnitSchema: import("mongoose").Schema<Unit, import("mongoose").Model<Unit, any, any, any, import("mongoose").Document<unknown, any, Unit, any> & Unit & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Unit, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Unit>, {}> & import("mongoose").FlatRecord<Unit> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const UnitModule: import("@nestjs/common").DynamicModule;
export type UnitDocument = HydratedDocument<Unit>;
