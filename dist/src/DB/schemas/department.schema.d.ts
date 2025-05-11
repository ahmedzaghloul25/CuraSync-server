import { CommonProps } from "common";
import { HydratedDocument, Types } from "mongoose";
export declare class Department extends CommonProps {
    name: string;
    description: string;
    head: Types.ObjectId;
}
export declare const DepartmentSchema: import("mongoose").Schema<Department, import("mongoose").Model<Department, any, any, any, import("mongoose").Document<unknown, any, Department, any> & Department & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Department, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Department>, {}> & import("mongoose").FlatRecord<Department> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const DepartmentModule: import("@nestjs/common").DynamicModule;
export type DepartmentDocument = HydratedDocument<Department>;
