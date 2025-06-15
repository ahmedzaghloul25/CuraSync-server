import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { connectionNameString } from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class HospitalUnit {
  @Prop({
    required: true,
  })
  unitCatalogId: Types.ObjectId;
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


  @Prop({
    default: false,
  })
  isConfirmed: boolean;
  @Prop({
    ref: "Employee",
  })
  confirmedBy: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: "Employee",
    required: true,
  })
  createdBy: Types.ObjectId;
  @Prop()
  isFreezed: boolean;
  @Prop({
    ref: "Employee",
  })
  freezedBy: Types.ObjectId;
  @Prop({
    ref: "Employee",
  })
  modifiedBy: Types.ObjectId;
}

export const HospitalUnitSchema = SchemaFactory.createForClass(HospitalUnit);
HospitalUnitSchema.index({ unitCatalogId: 1, department: 1 }, { unique: true });
export const HospitalUnitModule = MongooseModule.forFeature(
  [{ name: HospitalUnit.name, schema: HospitalUnitSchema }],
  connectionNameString.HOSPITAL
);
export type HospitalUnitDocument = HydratedDocument<HospitalUnit>;
