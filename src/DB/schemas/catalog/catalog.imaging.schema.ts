// src/catalog/schemas/imaging-procedure.schema.ts
import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {
  connectionNameString,
  ImagingBodyRegions,
  ImagingTypes,
} from "common/types";
import { _slugify } from "common/utils";
import { HydratedDocument, Types } from "mongoose";

@Schema({ timestamps: true })
export class ImagingCatalog {
  @Prop({ required: true })
  name: string;
  @Prop({
    unique: true,
  })
  slug: string;
  @Prop({ required: true, unique: true })
  code: string;
  @Prop({
    type: String,
    enum: ImagingTypes,
  })
  modality: string;
  @Prop({
    type: String,
    enum: ImagingBodyRegions,
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

export const ImagingCatalogSchema =
  SchemaFactory.createForClass(ImagingCatalog);
ImagingCatalogSchema.pre("save", function (next) {
  this.slug = _slugify(this.name);
  next();
});
export const ImagingCatalogModule = MongooseModule.forFeature(
  [{ name: ImagingCatalog.name, schema: ImagingCatalogSchema }],
  connectionNameString.CATALOG
);
export type ImagingCatalogDocument = HydratedDocument<ImagingCatalog>;
