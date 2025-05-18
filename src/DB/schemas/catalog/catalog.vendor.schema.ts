import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, COMMON_PROPS } from "common";
import { HydratedDocument } from "mongoose";

@Schema()
export class VendorCatalog extends COMMON_PROPS.CatalogProps {
  @Prop({
    required: true,
    unique: true,
    trim: true,
  })
  name: string;
  @Prop({
    required: true,
    unique: true,
  })
  phone: string;
  @Prop({
    minlength: 3,
    maxlength: 400,
  })
  address: string;
  @Prop({
    unique: true,
  })
  email: string;
  @Prop({
    required: true,
    unique: true,
  })
  commercialRegNum: string;
  @Prop({
    required: true,
    unique: true,
  })
  TIN: string;
}

export const VendorCatalogSchema = SchemaFactory.createForClass(VendorCatalog);
export const VendorCatalogModule = MongooseModule.forFeature(
  [{ name: VendorCatalog.name, schema: VendorCatalogSchema }],
  _Types.TYPES.connectionNameString.CATALOG
);
export type VendorCatalogDocument = HydratedDocument<VendorCatalog>;
