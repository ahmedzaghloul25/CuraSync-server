import {
  MongooseModule,
  Prop,
  Schema,
  SchemaFactory,
  Virtual,
} from "@nestjs/mongoose";
import { CommonProps, _Types } from "common";

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
    minlength: 2,
    maxlength: 50,
  })
  firstName: string;
  @Prop({
    trim: true,
    required: true,
    minlength: 2,
    maxlength: 50,
  })
  lastName: string;
  @Prop({
    required: true,
    unique: true,
  })
  email: string;
  @Prop({
    required: true,
    minlength: 6,
  })
  password: string;
  @Prop({
    enum: _Types.JobCategory,
    required: true,
  })
  category: string;
  @Prop({
    enum: _Types.RoleEnum,
  })
  role: string;
  @Prop({
    enum: _Types.AllOccupations,
    required: true,
  })
  occupation: string;
  @Prop({
    ref: "Hospital",
  })
  hospital: Types.ObjectId;
  @Prop({
    ref: "Department",
  })
  departments: [Types.ObjectId];
  @Prop({
    required: true,
    length: 11,
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
