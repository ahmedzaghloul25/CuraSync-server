import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { connectionNameString } from "common/types";
import { _slugify } from "common/utils";
import { HydratedDocument, Types } from "mongoose";

@Schema()
export class ServiceCatalog {
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

export const ServiceCatalogSchema =
  SchemaFactory.createForClass(ServiceCatalog);
ServiceCatalogSchema.pre("save", function (next) {
  this.slug = _slugify(this.name);
  next();
});
export const ServiceCatalogModule = MongooseModule.forFeature(
  [{ name: ServiceCatalog.name, schema: ServiceCatalogSchema }],
  connectionNameString.CATALOG
);
export type ServiceCatalogDocument = HydratedDocument<ServiceCatalog>;
