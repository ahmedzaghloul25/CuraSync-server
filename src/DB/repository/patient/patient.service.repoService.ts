import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { connectionNameString } from "common/types";
import { Model } from "mongoose";
import {
  PatientServiceOrder,
  PatientServiceOrderDocument,
} from "src/DB/schemas/patient/patient.service.record.schema";

export default class PatientServiceRepoService extends DbRepoService<PatientServiceOrderDocument> {
  constructor(
    @InjectModel(
      PatientServiceOrder.name,
      connectionNameString.HOSPITAL
    )
    private readonly serviceOrderModel: Model<PatientServiceOrderDocument>
  ) {
    super(serviceOrderModel);
  }
}
