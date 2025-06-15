import { HydratedDocument, Types } from "mongoose";
export declare class MedicineCatalog {
    genericName: string;
    brandName: string[];
    form: string;
    unit: string;
    pharmaceuticalForm: string;
    concentration: string;
    addedByHospitalId: Types.ObjectId;
    addedByEmployeeId: Types.ObjectId;
    isConfirmed: boolean;
    confirmedBy: Types.ObjectId;
    isFreezed: boolean;
    freezedBy: Types.ObjectId;
    modifiedBy: Types.ObjectId;
}
export declare const MedicineCatalogSchema: import("mongoose").Schema<MedicineCatalog, import("mongoose").Model<MedicineCatalog, any, any, any, import("mongoose").Document<unknown, any, MedicineCatalog, any> & MedicineCatalog & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MedicineCatalog, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<MedicineCatalog>, {}> & import("mongoose").FlatRecord<MedicineCatalog> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const MedicineCatalogModule: import("@nestjs/common").DynamicModule;
export type MedicineCatalogDocument = HydratedDocument<MedicineCatalog>;
