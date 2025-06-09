import { ConfirmableProps } from "common/props";
import { HydratedDocument, Types } from "mongoose";
export declare class HospitalUnit extends ConfirmableProps {
    unitCatalogId: Types.ObjectId;
    totalBedCount: number;
    availableBedCount: number;
    department: Types.ObjectId;
}
export declare const HospitalUnitSchema: import("mongoose").Schema<HospitalUnit, import("mongoose").Model<HospitalUnit, any, any, any, import("mongoose").Document<unknown, any, HospitalUnit, any> & HospitalUnit & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, HospitalUnit, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<HospitalUnit>, {}> & import("mongoose").FlatRecord<HospitalUnit> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const HospitalUnitModule: import("@nestjs/common").DynamicModule;
export type HospitalUnitDocument = HydratedDocument<HospitalUnit>;
