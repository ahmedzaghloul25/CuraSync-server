import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, COMMON_PROPS } from "common";
import { _slugify } from "common/utils";
import { HydratedDocument } from "mongoose";

@Schema()
export class ServiceCatalog extends COMMON_PROPS.CatalogProps {
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
}

export const ServiceCatalogSchema =
  SchemaFactory.createForClass(ServiceCatalog);
ServiceCatalogSchema.pre("save", function (next) {
  this.slug = _slugify(this.name);
  next();
});
export const ServiceCatalogModule = MongooseModule.forFeature(
  [{ name: ServiceCatalog.name, schema: ServiceCatalogSchema }],
  _Types.TYPES.connectionNameString.CATALOG
);
export type ServiceCatalogDocument = HydratedDocument<ServiceCatalog>;
