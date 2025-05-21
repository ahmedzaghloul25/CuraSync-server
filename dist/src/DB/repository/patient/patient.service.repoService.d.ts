import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { PatientServiceOrderDocument } from "src/DB/schemas/patient/patient.service.record.schema";
export default class PatientServiceRepoService extends DbRepoService<PatientServiceOrderDocument> {
    private readonly serviceOrderModel;
    constructor(serviceOrderModel: Model<PatientServiceOrderDocument>);
}
