import { HydratedDocument, Types } from "mongoose";
export declare class HospitalMedicine {
    medicineCatalogId: Types.ObjectId;
    price: number;
    hospital: Types.ObjectId;
    inventory: number;
    createdBy: Types.ObjectId;
    isFreezed: boolean;
    freezedBy: Types.ObjectId;
    isConfirmed: boolean;
    confirmedBy: Types.ObjectId;
}
export declare const HospitalMedicineSchema: import("mongoose").Schema<HospitalMedicine, import("mongoose").Model<HospitalMedicine, any, any, any, import("mongoose").Document<unknown, any, HospitalMedicine, any> & HospitalMedicine & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, HospitalMedicine, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<HospitalMedicine>, {}> & import("mongoose").FlatRecord<HospitalMedicine> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const HospitalMedicineModule: import("@nestjs/common").DynamicModule;
export type HospitalMedicineDocument = HydratedDocument<HospitalMedicine>;
