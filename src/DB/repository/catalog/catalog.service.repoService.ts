import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  ServiceCatalog,
  ServiceCatalogDocument,
} from "src/DB/schemas/catalog/catalog.service.schema";
import { _Types } from "common";

@Injectable()
export default class ServiceCatalogRepoService extends DbRepoService<ServiceCatalogDocument> {
  constructor(
    @InjectModel(ServiceCatalog.name, _Types.TYPES.connectionNameString.CATALOG)
    private readonly serviceCatalogModel: Model<ServiceCatalogDocument>
  ) {
    super(serviceCatalogModel);
  }
}
