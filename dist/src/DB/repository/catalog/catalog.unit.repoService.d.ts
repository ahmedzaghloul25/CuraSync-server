import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { UnitCatalogDocument } from "src/DB/schemas/catalog/catalog.unit.schema";
export default class UnitCatalogRepoService extends DbRepoService<UnitCatalogDocument> {
    private readonly unitCatalogModel;
    constructor(unitCatalogModel: Model<UnitCatalogDocument>);
}
