import { DbRepoService } from "./db.repo.service";
import { Model } from "mongoose";
import { ServiceRecordDocument } from "../schemas/serviceRecord.schema";
export default class ServiceRecordRepoService extends DbRepoService<ServiceRecordDocument> {
    private readonly serviceRecordModel;
    constructor(serviceRecordModel: Model<ServiceRecordDocument>);
}
