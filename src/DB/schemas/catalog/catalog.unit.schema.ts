import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, COMMON_PROPS } from "common";
import { _slugify } from "common/utils";
import { HydratedDocument } from "mongoose";

@Schema()
export class UnitCatalog extends COMMON_PROPS.CatalogProps {
  @Prop({
    required: true,
    trim: true,
  })
  name: string;
  @Prop({
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
UnitCatalogSchema.pre("save", function (next) {
  this.slug = _slugify(this.name);
  next();
});
export const UnitCatalogModule = MongooseModule.forFeature(
  [{ name: UnitCatalog.name, schema: UnitCatalogSchema }],
_Types.TYPES.connectionNameString.CATALOG);
export type UnitCatalogDocument = HydratedDocument<UnitCatalog>;
