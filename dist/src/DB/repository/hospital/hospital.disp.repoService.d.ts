import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { HospitalDisposableDocument } from "src/DB/schemas/hospital/hospital.disposable.schema";
export default class HospitalDisposableRepoService extends DbRepoService<HospitalDisposableDocument> {
    private readonly disposableModel;
    constructor(disposableModel: Model<HospitalDisposableDocument>);
}
