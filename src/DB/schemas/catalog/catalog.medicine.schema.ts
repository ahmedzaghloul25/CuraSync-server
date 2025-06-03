import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { CatalogProps } from "common/props";
import { TYPES } from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
// Shared Medicine schema across all Hospitals 
export class MedicineCatalog extends CatalogProps {
  @Prop({
    minlength: 2,
    maxlength: 100,
    unique: true,
    trim: true,
    required: true,
  })
  genericName: string;
  @Prop()
  brandName: string[];
  @Prop({
    enum: TYPES.MedicationForm,
    required: true,
  })
  form: string;
  @Prop({
    enum: TYPES.MedicineUnits,
    required: true,
  })
  unit: string;
  pharmaceuticalForm: string;
  @Prop({
    required: true,
    trim: true,
  })
  concentration: string;
}

export const MedicineCatalogSchema =
  SchemaFactory.createForClass(MedicineCatalog);
export const MedicineCatalogModule = MongooseModule.forFeature(
  [{ name: MedicineCatalog.name, schema: MedicineCatalogSchema }],
  TYPES.connectionNameString.CATALOG
);
export type MedicineCatalogDocument = HydratedDocument<MedicineCatalog>;
