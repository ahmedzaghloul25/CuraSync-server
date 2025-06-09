import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ConfirmableProps } from "common/props";
import { TYPES } from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  timestamps: true,
})
export class HospitalDepartment extends ConfirmableProps {
  @Prop({
    required: true,
  })
  departmentCatalogId: Types.ObjectId;
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
  TYPES.connectionNameString.HOSPITAL
);
export type HospitalDepartmentDocument = HydratedDocument<HospitalDepartment>;
