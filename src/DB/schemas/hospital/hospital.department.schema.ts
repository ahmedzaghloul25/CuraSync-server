import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, COMMON_PROPS } from "common";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  timestamps: true,
})
export class HospitalDepartment extends COMMON_PROPS.ConfirmableProps {
  @Prop({
    required: true,
  })
  catalogId: Types.ObjectId;
  @Prop({
    ref: "Employee",
    required: true,
  })
  head: Types.ObjectId;
  @Prop({
    ref: "Hospital",
    required: true,
  })
  hospital: Types.ObjectId;
}

export const HospitalDepartmentSchema =
  SchemaFactory.createForClass(HospitalDepartment);
HospitalDepartmentSchema.index({ catalogId: 1, hospital: 1 }, { unique: true });
export const HospitalDepartmentModule = MongooseModule.forFeature(
  [{ name: HospitalDepartment.name, schema: HospitalDepartmentSchema }],
  _Types.TYPES.connectionNameString.HOSPITAL
);
export type HospitalDepartmentDocument = HydratedDocument<HospitalDepartment>;
