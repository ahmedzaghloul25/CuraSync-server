import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, COMMON_PROPS } from "common";
import { Decimal128, HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
// Shared Medicine schema across all Hospitals 
export class MedicineCatalog extends COMMON_PROPS.CatalogProps {
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
    enum: _Types.TYPES.MedicationForm,
    required: true,
  })
  form: string;
  @Prop({
    enum: _Types.TYPES.MedicineUnits,
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
  _Types.TYPES.connectionNameString.CATALOG
);
export type MedicineCatalogDocument = HydratedDocument<MedicineCatalog>;
