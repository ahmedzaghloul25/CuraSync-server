import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { HospitalUnitDocument } from "src/DB/schemas/hospital/hospital.unit.schema";
export default class HospitalUnitRepoService extends DbRepoService<HospitalUnitDocument> {
    private readonly hospitalModel;
    constructor(hospitalModel: Model<HospitalUnitDocument>);
}
