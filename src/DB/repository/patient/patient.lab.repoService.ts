import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { connectionNameString } from "common/types";
import { Model } from "mongoose";
import {
  PatientLabOrder,
  PatientLabOrderDocument,
} from "src/DB/schemas/patient/patient.lab.record.schema";

export default class PatientLabOrderRepoService extends DbRepoService<PatientLabOrderDocument> {
  constructor(
    @InjectModel(
      PatientLabOrder.name,
      connectionNameString.HOSPITAL
    )
    private readonly labOrderModel: Model<PatientLabOrderDocument>
  ) {
    super(labOrderModel);
  }
}
