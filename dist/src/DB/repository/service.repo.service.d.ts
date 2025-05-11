import { ServiceDocument } from "../schemas/service.schema";
import { DbRepoService } from "./db.repo.service";
import { Model } from "mongoose";
export default class ServiceRepoService extends DbRepoService<ServiceDocument> {
    private readonly serviceModel;
    constructor(serviceModel: Model<ServiceDocument>);
}
