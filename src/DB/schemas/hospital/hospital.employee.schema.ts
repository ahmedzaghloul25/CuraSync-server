import {
  MongooseModule,
  Prop,
  Schema,
  SchemaFactory,
  Virtual,
} from "@nestjs/mongoose";
import { MIN_MAX_LENGTH } from "common/constants";
import { CoreProps } from "common/props";
import { connectionNameString, OtpType } from "common/types";
import { AllRoles } from "common/types/roles";

import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Employee extends CoreProps {
  @Prop({
    trim: true,
    required: true,
    minlength: MIN_MAX_LENGTH.nameMinInput,
    maxlength: MIN_MAX_LENGTH.nameMaxInput,
  })
  firstName: string;
  @Prop({
    trim: true,
    required: true,
    minlength: MIN_MAX_LENGTH.nameMinInput,
    maxlength: MIN_MAX_LENGTH.nameMaxInput,
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
    required: true,
  })
  occupation: AllRoles;
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
    enum: OtpType,
  })
  otpFor: string;
  @Prop()
  otpExpireAt: Date;
  @Prop()
  passwordChangedAt: Date;
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
export const employeeModule = MongooseModule.forFeature(
  [{ name: Employee.name, schema: EmployeeSchema }],
  connectionNameString.HOSPITAL
);
export type EmployeeDocument = HydratedDocument<Employee>;
