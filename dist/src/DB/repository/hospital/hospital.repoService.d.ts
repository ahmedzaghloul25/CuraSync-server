import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { HospitalDocument } from "src/DB/schemas/hospital/hospital.schema";
export default class HospitalRepoService extends DbRepoService<HospitalDocument> {
    private readonly hospitalModel;
    constructor(hospitalModel: Model<HospitalDocument>);
}
