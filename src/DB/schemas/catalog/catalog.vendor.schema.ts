import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { connectionNameString } from "common/types";
import { _slugify } from "common/utils";
import { HydratedDocument, Types } from "mongoose";

@Schema()
export class VendorCatalog {
  @Prop({
    required: true,
    unique: true,
    trim: true,
  })
  name: string;
  @Prop()
  slug: string;
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

export const VendorCatalogSchema = SchemaFactory.createForClass(VendorCatalog);
VendorCatalogSchema.pre("save", function (next) {
  this.slug = _slugify(this.name);
  next();
});
export const VendorCatalogModule = MongooseModule.forFeature(
  [{ name: VendorCatalog.name, schema: VendorCatalogSchema }],
  connectionNameString.CATALOG
);
export type VendorCatalogDocument = HydratedDocument<VendorCatalog>;
