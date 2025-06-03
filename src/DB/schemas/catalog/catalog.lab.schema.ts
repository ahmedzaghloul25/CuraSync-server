import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { CatalogProps } from "common/props";
import { TYPES } from "common/types";
import { _slugify } from "common/utils";
import { Decimal128, HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class LabCatalog extends CatalogProps {
  @Prop({ required: true })
  name: string;
  @Prop({
    unique : true
  })
  slug : string
  @Prop({ required: true, unique: true })
  code: string;
  @Prop()
  loincCode: string;
  @Prop({
    enum: TYPES.LAbTestCategory,
    required: true,
  })
  category: string;
  @Prop()
  description: string;
  @Prop({
    enum: TYPES.SpecimenType,
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
}

export const LabCatalogSchema = SchemaFactory.createForClass(LabCatalog);
LabCatalogSchema.pre("save", function (next) {
  this.slug = _slugify(this.name);
  next();
});
export const LabCatalogModule = MongooseModule.forFeature(
  [{ name: LabCatalog.name, schema: LabCatalogSchema }],
  TYPES.connectionNameString.CATALOG
);
export type LabCatalogDocument = HydratedDocument<LabCatalog>;
