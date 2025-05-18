import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, COMMON_PROPS } from "common";
import { HydratedDocument } from "mongoose";

@Schema()
export class UnitCatalog extends COMMON_PROPS.CatalogProps {
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
  slug: string;
  @Prop({
    minlength: 3,
    maxlength: 400,
  })
  description: string;
  @Prop({
    required : true
  })
  departmentSlug : string
}

export const UnitCatalogSchema =
  SchemaFactory.createForClass(UnitCatalog);
export const UnitCatalogModule = MongooseModule.forFeature(
  [{ name: UnitCatalog.name, schema: UnitCatalogSchema }],
_Types.TYPES.connectionNameString.CATALOG);
export type UnitCatalogDocument = HydratedDocument<UnitCatalog>;
