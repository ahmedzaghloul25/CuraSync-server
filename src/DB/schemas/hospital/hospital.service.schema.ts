import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { connectionNameString } from "common/types";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
})
export class HospitalService {
  @Prop({
    required: true,
  })
  serviceCatalogId: Types.ObjectId;
  @Prop({
    required: true,
    min: 0,
  })
  price: number;
  @Prop({
    required: true,
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

export const HospitalServiceSchema =
  SchemaFactory.createForClass(HospitalService);
HospitalServiceSchema.index({ serviceCatalogId: 1, hospital: 1 }, { unique: true });
export const HospitalServiceModule = MongooseModule.forFeature(
  [{ name: HospitalService.name, schema: HospitalServiceSchema }],
connectionNameString.HOSPITAL);
export type HospitalServiceDocument = HydratedDocument<HospitalService>;
