import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { _Types } from "common";
import { Model } from "mongoose";
import {
  PatientLabOrder,
  PatientLabOrderDocument,
} from "src/DB/schemas/patient/patient.lab.record.schema";

export default class PatientLabOrderRepoService extends DbRepoService<PatientLabOrderDocument> {
  constructor(
    @InjectModel(
      PatientLabOrder.name,
      _Types.TYPES.connectionNameString.HOSPITAL
    )
    private readonly labOrderModel: Model<PatientLabOrderDocument>
  ) {
    super(labOrderModel);
  }
}
