import { InjectModel } from "@nestjs/mongoose";
import { Service, ServiceDocument } from "../schemas/service.schema";
import { DbRepoService } from "./db.repo.service";
import { Model } from "mongoose";


export default class ServiceRepoService extends DbRepoService<ServiceDocument>{
    constructor(@InjectModel(Service.name) private readonly serviceModel : Model<ServiceDocument>){
        super(serviceModel)
    }
}