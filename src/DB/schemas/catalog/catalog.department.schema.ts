import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, COMMON_PROPS, CONSTANTS } from "common";
import { _slugify } from "common/utils";
import { HydratedDocument } from "mongoose";

@Schema()
export class DepartmentCatalog extends COMMON_PROPS.CatalogProps {
  @Prop({
    required: true,
    trim: true,
  })
  name: string;
  @Prop({
    unique : true
  })
  slug: string;
  @Prop({
    minlength: CONSTANTS.MIN_MAX_LENGTH.descMinInput,
    maxlength: CONSTANTS.MIN_MAX_LENGTH.descMaxInput,
  })
  description: string;
}

export const DepartmentCatalogSchema =
  SchemaFactory.createForClass(DepartmentCatalog);

DepartmentCatalogSchema.pre("save", function (next) {
  this.slug = _slugify(this.name);
  next();
});
export const DepartmentCatalogModule = MongooseModule.forFeature(
  [{ name: DepartmentCatalog.name, schema: DepartmentCatalogSchema }],
  _Types.TYPES.connectionNameString.CATALOG
);
export type DepartmentCatalogDocument = HydratedDocument<DepartmentCatalog>;
