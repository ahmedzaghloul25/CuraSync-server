import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, CommonProps } from "common";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Unit extends CommonProps {
  @Prop({
    required : true,
    enum : _Types.AllUnits
  })
  name: string;
  @Prop({
    minlength: 3,
    maxlength: 400,
  })
  description: string;
  @Prop({
    min : 0,
    max : 100
  })
  bedCount : number
  @Prop({
    ref : 'Department',
    required : true
  })
  department : Types.ObjectId
}

export const UnitSchema = SchemaFactory.createForClass(Unit)
export const UnitModule = MongooseModule.forFeature([
    {name : Unit.name, schema : UnitSchema}
])
export type UnitDocument = HydratedDocument<Unit>