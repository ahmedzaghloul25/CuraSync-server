import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { PatientFileDocument } from "src/DB/schemas/patient/patient.file.schema";
export default class PatientFileRepoService extends DbRepoService<PatientFileDocument> {
    private readonly fileModel;
    constructor(fileModel: Model<PatientFileDocument>);
}
