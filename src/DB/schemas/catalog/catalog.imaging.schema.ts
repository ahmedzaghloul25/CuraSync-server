// src/catalog/schemas/imaging-procedure.schema.ts
import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, COMMON_PROPS } from "common";
import { HydratedDocument } from "mongoose";

@Schema({ timestamps: true })
export class ImagingCatalog extends COMMON_PROPS.CatalogProps {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true, unique: true })
  code: string;
  @Prop({
    type: String,
    enum: _Types.TYPES.ImagingTypes,
  })
  modality: string;
  @Prop({
    type: String,
    enum: _Types.TYPES.ImagingBodyRegions,
  })
  bodyRegion: string;
  @Prop()
  description: string;
  @Prop()
  contraindications: string;
  @Prop()
  patientPreparation: string;
  @Prop()
  radiationDose: string;
  @Prop({ type: Boolean, default: false })
  usesContrast: boolean;
  @Prop()
  contrastDetails: string;
  @Prop({ type: Boolean, default: false })
  requiresConsent: boolean;
}

export const ImagingCatalogSchema =
  SchemaFactory.createForClass(ImagingCatalog);
export const ImagingCatalogModule = MongooseModule.forFeature(
  [{ name: ImagingCatalog.name, schema: ImagingCatalogSchema }],
  _Types.TYPES.connectionNameString.CATALOG
);
export type ImagingCatalogDocument = HydratedDocument<ImagingCatalog>;
