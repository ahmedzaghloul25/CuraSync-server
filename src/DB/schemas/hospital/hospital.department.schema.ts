import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { connectionNameString } from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  timestamps: true,
})
export class HospitalDepartment {
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

export const HospitalDepartmentSchema =
  SchemaFactory.createForClass(HospitalDepartment);
HospitalDepartmentSchema.index({ catalogId: 1, hospital: 1 }, { unique: true });
export const HospitalDepartmentModule = MongooseModule.forFeature(
  [{ name: HospitalDepartment.name, schema: HospitalDepartmentSchema }],
  connectionNameString.HOSPITAL
);
export type HospitalDepartmentDocument = HydratedDocument<HospitalDepartment>;
