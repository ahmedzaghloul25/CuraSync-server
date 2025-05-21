import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { _Types } from "common";
import { Model } from "mongoose";
import {
  PatientImagingOrder,
  PatientImagingOrderDocument,
} from "src/DB/schemas/patient/patient.imaging.record.schema";

export default class PatientImagingOrderRepoService extends DbRepoService<PatientImagingOrderDocument> {
  constructor(
    @InjectModel(
      PatientImagingOrder.name,
      _Types.TYPES.connectionNameString.HOSPITAL
    )
    private readonly imagingOrderModel: Model<PatientImagingOrderDocument>
  ) {
    super(imagingOrderModel);
  }
}
