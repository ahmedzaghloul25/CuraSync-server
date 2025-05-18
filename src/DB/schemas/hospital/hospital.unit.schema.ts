import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, COMMON_PROPS } from "common";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class HospitalUnit extends COMMON_PROPS.ConfirmableProps {
  @Prop({
    required: true,
  })
  catalogId: Types.ObjectId;
  @Prop({
    min: 0,
    max: 500,
  })
  totalBedCount: number;
  @Prop({
    min: 0,
    max: 500,
  })
  availableBedCount: number;
  @Prop({
    ref: "Department",
  })
  department: Types.ObjectId;
}

export const HospitalUnitSchema = SchemaFactory.createForClass(HospitalUnit);
HospitalUnitSchema.index({ catalogId: 1, department: 1 }, { unique: true });
export const HospitalUnitModule = MongooseModule.forFeature(
  [{ name: HospitalUnit.name, schema: HospitalUnitSchema }],
  _Types.TYPES.connectionNameString.HOSPITAL
);
export type HospitalUnitDocument = HydratedDocument<HospitalUnit>;
