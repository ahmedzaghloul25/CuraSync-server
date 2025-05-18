import { COMMON_PROPS } from "common";
import { HydratedDocument, Types } from "mongoose";
export declare class DisposableCatalog extends COMMON_PROPS.CatalogProps {
    name: string;
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
