import {
  MongooseModule,
  Prop,
  Schema,
  SchemaFactory,
  Virtual,
} from "@nestjs/mongoose";
import { CommonProps, MIN_MAX_LENGTH, _Types } from "common";

import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Employee extends CommonProps {
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
    minlength: MIN_MAX_LENGTH.passwordMinLength,
  })
  password: string;
  @Prop({
    enum: _Types.JobCategoryTypes,
    required: true,
  })
  jobCategory: string;
  @Prop({
    enum: _Types.RoleEnum,
    default : _Types.RoleEnum.PENDING
  })
  role: string;
  @Prop({
    enum: _Types.AllOccupations,
    required: true,
  })
  occupation: string;
  @Prop({
    required: true,
    length: MIN_MAX_LENGTH.phoneNumLength,
  })
  phone: string;
  @Prop({
    required: true,
  })
  DOB: Date;
  @Prop()
  otp: string;
  @Prop({
    enum: _Types.OtpType,
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
}
export const EmployeeSchema = SchemaFactory.createForClass(Employee);
export const EmployeeModule = MongooseModule.forFeature([
  { name: Employee.name, schema: EmployeeSchema },
]);
export type EmployeeDocument = HydratedDocument<Employee>;
