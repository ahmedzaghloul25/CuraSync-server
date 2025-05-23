import { Prop } from "@nestjs/mongoose";
import { Types } from "mongoose";

export abstract class CoreProps {
  @Prop({
    ref: "Employee",
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

