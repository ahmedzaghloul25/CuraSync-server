import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { HospitalLabDocument } from "src/DB/schemas/hospital/hospital.lab.schema";
export default class HospitalLabRepoService extends DbRepoService<HospitalLabDocument> {
    private readonly labModel;
    constructor(labModel: Model<HospitalLabDocument>);
}
