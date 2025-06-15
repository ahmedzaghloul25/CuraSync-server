import { DbRepoService } from "../db.repo.service";
import { PatientDocument } from "../../schemas/hospital/hospital.patient.schema";
import { Model } from "mongoose";
export default class PatientRepoService extends DbRepoService<PatientDocument> {
    private readonly patientModel;
    constructor(patientModel: Model<PatientDocument>);
}
