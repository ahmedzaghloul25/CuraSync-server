import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { HospitalServiceDocument } from "src/DB/schemas/hospital/hospital.service.schema";
export default class HospitalServiceRepoService extends DbRepoService<HospitalServiceDocument> {
    private readonly serviceModel;
    constructor(serviceModel: Model<HospitalServiceDocument>);
}
