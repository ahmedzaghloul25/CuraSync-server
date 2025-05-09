import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, CommonProps } from "common";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  timestamps: true,
})
export class Department extends CommonProps {
  @Prop({
    required: true,
    enum: _Types.Departments
  })
  name: string;
  @Prop({
    minlength: 3,
    maxlength: 400,
  })
  description: string;
  @Prop({
    ref: "Hospital",
    required: true,
  })
  hospital: Types.ObjectId;
  @Prop({
    ref: "Employee",
    required: true,
  })
  head: Types.ObjectId;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
export const DepartmentModule = MongooseModule.forFeature([
  { name: Department.name, schema: DepartmentSchema },
]);
export type DepartmentDocument = HydratedDocument<Department>;
