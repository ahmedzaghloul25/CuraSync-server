import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { ServiceCatalogDocument } from "src/DB/schemas/catalog/catalog.service.schema";
export default class ServiceCatalogRepoService extends DbRepoService<ServiceCatalogDocument> {
    private readonly serviceCatalogModel;
    constructor(serviceCatalogModel: Model<ServiceCatalogDocument>);
}
