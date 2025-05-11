import { Prop } from "@nestjs/mongoose";
import { Types } from "mongoose";

export default class CommonProps {
  @Prop({
    ref: "Employee",
    required: true,
  })
  createdBy: Types.ObjectId;
  @Prop()
  isDeleted: boolean;
  @Prop({
    ref: "Employee",
  })
  deletedBy: Types.ObjectId;
  @Prop({
    ref: "Employee",
  })
  modifiedBy: Types.ObjectId;
  @Prop()
  isConfirmed: boolean;
  @Prop({
    ref: "Employee",
  })
  confirmedBy: Types.ObjectId;
  @Prop({
    ref: "Hospital",
  })
  hospital: Types.ObjectId;
  @Prop({
    ref: "File",
  })
  file: Types.ObjectId;

  @Prop({
    ref: "Service",
  })
  service: Types.ObjectId;
  @Prop({
    ref: "Patient",
    required: true,
  })
  patient: Types.ObjectId;
  @Prop({
    ref: "Unit",
    required: true,
  })
  unit: Types.ObjectId;
  @Prop({
    ref: "Department",
  })
  departments: [Types.ObjectId];
}
