import { HydratedDocument, Types } from "mongoose";
export declare class DisposableCatalog {
    name: string;
    slug: string;
    addedByHospitalId: Types.ObjectId;
    addedByEmployeeId: Types.ObjectId;
    isConfirmed: boolean;
    confirmedBy: Types.ObjectId;
    isFreezed: boolean;
    freezedBy: Types.ObjectId;
    modifiedBy: Types.ObjectId;
}
export declare const DisposableCatalogSchema: import("mongoose").Schema<DisposableCatalog, import("mongoose").Model<DisposableCatalog, any, any, any, import("mongoose").Document<unknown, any, DisposableCatalog, any> & DisposableCatalog & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, DisposableCatalog, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<DisposableCatalog>, {}> & import("mongoose").FlatRecord<DisposableCatalog> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const DisposableCatalogModule: import("@nestjs/common").DynamicModule;
export type DisposableCatalogDocument = HydratedDocument<DisposableCatalog>;
