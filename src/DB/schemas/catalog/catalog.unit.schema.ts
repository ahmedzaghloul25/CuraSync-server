import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { connectionNameString } from "common/types";
import { _slugify } from "common/utils";
import { HydratedDocument, Types } from "mongoose";

@Schema()
export class UnitCatalog {
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
    required: true,
  })
  departmentSlug: string;

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

export const UnitCatalogSchema = SchemaFactory.createForClass(UnitCatalog);
UnitCatalogSchema.pre("save", function (next) {
  this.slug = _slugify(this.name);
  next();
});
export const UnitCatalogModule = MongooseModule.forFeature(
  [{ name: UnitCatalog.name, schema: UnitCatalogSchema }],
  connectionNameString.CATALOG
);
export type UnitCatalogDocument = HydratedDocument<UnitCatalog>;
