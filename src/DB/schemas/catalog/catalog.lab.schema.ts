import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {
  connectionNameString,
  LAbTestCategory,
  SpecimenType,
} from "common/types";
import { _slugify } from "common/utils";
import { Decimal128, HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class LabCatalog {
  @Prop({ required: true })
  name: string;
  @Prop({
    unique: true,
  })
  slug: string;
  @Prop({ required: true, unique: true })
  code: string;
  @Prop()
  loincCode: string;
  @Prop({
    enum: LAbTestCategory,
    required: true,
  })
  category: string;
  @Prop()
  description: string;
  @Prop({
    enum: SpecimenType,
    required: true,
  })
  specimenType: string;
  @Prop()
  specimenRequirements: string;
  @Prop()
  processingTime: string;
  @Prop()
  referenceValues: string;
  @Prop({ type: Boolean, default: false })
  requiresConsent: boolean;
  @Prop()
  requiredFasting: string[];

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

export const LabCatalogSchema = SchemaFactory.createForClass(LabCatalog);
LabCatalogSchema.pre("save", function (next) {
  this.slug = _slugify(this.name);
  next();
});
export const LabCatalogModule = MongooseModule.forFeature(
  [{ name: LabCatalog.name, schema: LabCatalogSchema }],
  connectionNameString.CATALOG
);
export type LabCatalogDocument = HydratedDocument<LabCatalog>;
