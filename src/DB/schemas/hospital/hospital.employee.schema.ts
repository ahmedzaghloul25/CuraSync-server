import {
  MongooseModule,
  Prop,
  Schema,
  SchemaFactory,
  Virtual,
} from "@nestjs/mongoose";
import { COMMON_PROPS, CONSTANTS, _Types } from "common";

import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Employee {
  @Prop({
    trim: true,
    required: true,
    minlength: CONSTANTS.MIN_MAX_LENGTH.nameMinInput,
    maxlength: CONSTANTS.MIN_MAX_LENGTH.nameMaxInput,
  })
  firstName: string;
  @Prop({
    trim: true,
    required: true,
    minlength: CONSTANTS.MIN_MAX_LENGTH.nameMinInput,
    maxlength: CONSTANTS.MIN_MAX_LENGTH.nameMaxInput,
  })
  lastName: string;
  @Prop({
    required: true,
    unique: true,
  })
  email: string;
  @Prop({
    required: true,
  })
  password: string;
  @Prop({
    enum: [
      ...Object.values(_Types.AdminRoles),
      ...Object.values(_Types.MedicalRoles),
    ],
    required: true,
  })
  occupation: string;
  @Prop({
    required: true,
    match: /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/g,
  })
  phone: string;
  @Prop({
    required: true,
  })
  DOB: Date;
  @Prop({
    default: false,
  })
  isEmailConfirmed: boolean;
  @Prop()
  otp: string;
  @Prop({
    enum: _Types.TYPES.OtpType,
  })
  otpFor: string;
  @Prop()
  otpExpireAt: Date;

  @Virtual({
    get: function (this: Employee) {
      return `${this.firstName} ${this.lastName}`;
    },
  })
  fullName: string;
  @Prop({
    ref: "Hospital",
  })
  hospital: Types.ObjectId;
}
export const EmployeeSchema = SchemaFactory.createForClass(Employee);
export const EmployeeModule = MongooseModule.forFeature(
  [{ name: Employee.name, schema: EmployeeSchema }],
  _Types.TYPES.connectionNameString.HOSPITAL
);
export type EmployeeDocument = HydratedDocument<Employee>;
