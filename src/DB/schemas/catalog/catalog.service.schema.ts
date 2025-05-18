import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, COMMON_PROPS } from "common";
import { HydratedDocument } from "mongoose";

@Schema()
export class ServiceCatalog extends COMMON_PROPS.CatalogProps {
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
}

export const ServiceCatalogSchema =
  SchemaFactory.createForClass(ServiceCatalog);
export const ServiceCatalogModule = MongooseModule.forFeature(
  [{ name: ServiceCatalog.name, schema: ServiceCatalogSchema }],
  _Types.TYPES.connectionNameString.CATALOG
);
export type ServiceCatalogDocument = HydratedDocument<ServiceCatalog>;
