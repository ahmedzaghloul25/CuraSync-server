import { COMMON_PROPS } from "common";
import { HydratedDocument, Types } from "mongoose";
export declare class HospitalDepartment extends COMMON_PROPS.ConfirmableProps {
    catalogId: Types.ObjectId;
    head: Types.ObjectId;
    hospital: Types.ObjectId;
}
export declare const HospitalDepartmentSchema: import("mongoose").Schema<HospitalDepartment, import("mongoose").Model<HospitalDepartment, any, any, any, import("mongoose").Document<unknown, any, HospitalDepartment, any> & HospitalDepartment & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, HospitalDepartment, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<HospitalDepartment>, {}> & import("mongoose").FlatRecord<HospitalDepartment> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const HospitalDepartmentModule: import("@nestjs/common").DynamicModule;
export type HospitalDepartmentDocument = HydratedDocument<HospitalDepartment>;
