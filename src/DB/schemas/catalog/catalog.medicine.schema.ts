import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {
  connectionNameString,
  MedicationForm,
  MedicineUnits,
} from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class MedicineCatalog {
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
    enum: MedicationForm,
    required: true,
  })
  form: string;
  @Prop({
    enum: MedicineUnits,
    required: true,
  })
  unit: string;
  pharmaceuticalForm: string;
  @Prop({
    required: true,
    trim: true,
  })
  concentration: string;

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

export const MedicineCatalogSchema =
  SchemaFactory.createForClass(MedicineCatalog);
export const MedicineCatalogModule = MongooseModule.forFeature(
  [{ name: MedicineCatalog.name, schema: MedicineCatalogSchema }],
  connectionNameString.CATALOG
);
export type MedicineCatalogDocument = HydratedDocument<MedicineCatalog>;
