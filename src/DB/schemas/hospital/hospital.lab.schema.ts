import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ConfirmableProps } from "common/props";
import { TYPES } from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class HospitalLab extends ConfirmableProps {
  @Prop({
    ref: "LabCatalog",
    required: true,
  })
  catalogId: Types.ObjectId;
  @Prop({
    min: 1,
  })
  price: number;
  @Prop({
    default: true,
  })
  isActive: boolean;
  @Prop({
    ref: "Hospital",
  })
  hospital: Types.ObjectId;
}

export const HospitalLabSchema = SchemaFactory.createForClass(HospitalLab);
HospitalLabSchema.index({ catalogId: 1, hospital: 1 }, { unique: true });
export const HospitalLabModule = MongooseModule.forFeature(
  [{ name: HospitalLab.name, schema: HospitalLabSchema }],
  TYPES.connectionNameString.HOSPITAL
);
export type HospitalLabDocument = HydratedDocument<HospitalLab>;
