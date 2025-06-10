import { Prop } from "@nestjs/mongoose";
import { TYPES } from "common/types";
import { Types } from "mongoose";

export abstract class CoreProps {
  @Prop({
    type : Types.ObjectId,
    ref: "Employee",
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

export abstract class CatalogProps {
  @Prop()
  addedByHospitalId: string;
  @Prop()
  addedByEmployeeId: string;
}

export abstract class ConfirmableProps extends CoreProps {
  @Prop({
    default: false,
  })
  isConfirmed: boolean;
  @Prop({
    ref: "Employee",
  })
  confirmedBy: Types.ObjectId;
}

