import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  ServiceCatalog,
  ServiceCatalogDocument,
} from "src/DB/schemas/catalog/catalog.service.schema";
import { connectionNameString } from "common/types";

@Injectable()
export default class ServiceCatalogRepoService extends DbRepoService<ServiceCatalogDocument> {
  constructor(
    @InjectModel(ServiceCatalog.name, connectionNameString.CATALOG)
    private readonly serviceCatalogModel: Model<ServiceCatalogDocument>
  ) {
    super(serviceCatalogModel);
  }
}
