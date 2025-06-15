import { HydratedDocument, Types } from "mongoose";
export declare class HospitalImaging {
    imagingCatalogId: Types.ObjectId;
    price: number;
    hospital: Types.ObjectId;
    createdBy: Types.ObjectId;
    isFreezed: boolean;
    freezedBy: Types.ObjectId;
    isConfirmed: boolean;
    confirmedBy: Types.ObjectId;
}
export declare const HospitalImagingSchema: import("mongoose").Schema<HospitalImaging, import("mongoose").Model<HospitalImaging, any, any, any, import("mongoose").Document<unknown, any, HospitalImaging, any> & HospitalImaging & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, HospitalImaging, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<HospitalImaging>, {}> & import("mongoose").FlatRecord<HospitalImaging> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const HospitalImagingModule: import("@nestjs/common").DynamicModule;
export type HospitalImagingDocument = HydratedDocument<HospitalImaging>;
