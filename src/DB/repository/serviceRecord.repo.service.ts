import { InjectModel } from "@nestjs/mongoose";
import { DbRepoService } from "./db.repo.service";
import { Model } from "mongoose";
import {
  ServiceRecord,
  ServiceRecordDocument,
} from "../schemas/serviceRecord.schema";

export default class ServiceRecordRepoService extends DbRepoService<ServiceRecordDocument> {
  constructor(
    @InjectModel(ServiceRecord.name)
    private readonly serviceRecordModel: Model<ServiceRecordDocument>
  ) {
    super(serviceRecordModel);
  }
}
