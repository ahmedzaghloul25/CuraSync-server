import { HospitalDocument } from "../schemas/hospital.schema";
import { DbRepoService } from "./db.repo.service";
import { Model } from "mongoose";
export default class HospitalRepoService extends DbRepoService<HospitalDocument> {
    private readonly hospitalModel;
    constructor(hospitalModel: Model<HospitalDocument>);
}
