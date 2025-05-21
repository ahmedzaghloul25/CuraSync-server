import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { PatientLabOrderDocument } from "src/DB/schemas/patient/patient.lab.record.schema";
export default class PatientLabOrderRepoService extends DbRepoService<PatientLabOrderDocument> {
    private readonly labOrderModel;
    constructor(labOrderModel: Model<PatientLabOrderDocument>);
}
