import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { PatientDocument } from "src/DB/schemas/hospital/hospital.patient.schema";
export default class HospitalPatientRepoService extends DbRepoService<PatientDocument> {
    private readonly patientModel;
    constructor(patientModel: Model<PatientDocument>);
}
