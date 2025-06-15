import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { connectionNameString } from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class HospitalLab {
  @Prop({
    required: true,
  })
  labCatalogId: Types.ObjectId;
  @Prop({
    min: 1,
  })
  price: number;
  @Prop({
    default: true,
  })
  isActive: boolean;
  @Prop({
    ref: "Hospital",
  })
  hospital: Types.ObjectId;


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
    default: false,
  })
  isConfirmed: boolean;
  @Prop({
    ref: "Employee",
  })
  confirmedBy: Types.ObjectId;
}

export const HospitalLabSchema = SchemaFactory.createForClass(HospitalLab);
HospitalLabSchema.index({ labCatalogId: 1, hospital: 1 }, { unique: true });
export const HospitalLabModule = MongooseModule.forFeature(
  [{ name: HospitalLab.name, schema: HospitalLabSchema }],
  connectionNameString.HOSPITAL
);
export type HospitalLabDocument = HydratedDocument<HospitalLab>;
