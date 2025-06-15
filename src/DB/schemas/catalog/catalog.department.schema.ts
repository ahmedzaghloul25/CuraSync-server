import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { MIN_MAX_LENGTH } from "common/constants";
import { connectionNameString } from "common/types";
import { _slugify } from "common/utils";
import { HydratedDocument, Types } from "mongoose";

@Schema()
export class DepartmentCatalog {
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
    minlength: MIN_MAX_LENGTH.descMinInput,
    maxlength: MIN_MAX_LENGTH.descMaxInput,
  })
  description: string;

  @Prop()
  addedByHospitalId: Types.ObjectId;
  @Prop()
  addedByEmployeeId: Types.ObjectId;

  @Prop({
    default: false,
  })
  isConfirmed: boolean;
  @Prop()
  confirmedBy: Types.ObjectId;

  @Prop()
  isFreezed: boolean;
  @Prop()
  freezedBy: Types.ObjectId;
  @Prop()
  modifiedBy: Types.ObjectId;
}

export const DepartmentCatalogSchema =
  SchemaFactory.createForClass(DepartmentCatalog);

DepartmentCatalogSchema.pre("save", function (next) {
  this.slug = _slugify(this.name);
  next();
});
export const DepartmentCatalogModule = MongooseModule.forFeature(
  [{ name: DepartmentCatalog.name, schema: DepartmentCatalogSchema }],
  connectionNameString.CATALOG
);
export type DepartmentCatalogDocument = HydratedDocument<DepartmentCatalog>;
