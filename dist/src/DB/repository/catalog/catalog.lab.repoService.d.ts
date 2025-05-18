import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { LabCatalogDocument } from "src/DB/schemas/catalog/catalog.lab.schema";
export default class LabCatalogRepoService extends DbRepoService<LabCatalogDocument> {
    private readonly labCatalogModel;
    constructor(labCatalogModel: Model<LabCatalogDocument>);
}
