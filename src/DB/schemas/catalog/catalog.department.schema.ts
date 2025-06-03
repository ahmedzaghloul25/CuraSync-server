import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { MIN_MAX_LENGTH } from "common/constants";
import { CatalogProps } from "common/props";
import { TYPES } from "common/types";
import { _slugify } from "common/utils";
import { HydratedDocument } from "mongoose";

@Schema()
export class DepartmentCatalog extends CatalogProps {
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
    minlength: MIN_MAX_LENGTH.descMinInput,
    maxlength: MIN_MAX_LENGTH.descMaxInput,
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
  TYPES.connectionNameString.CATALOG
);
export type DepartmentCatalogDocument = HydratedDocument<DepartmentCatalog>;
