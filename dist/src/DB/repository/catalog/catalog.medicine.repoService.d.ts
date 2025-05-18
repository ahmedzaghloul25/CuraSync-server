import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { MedicineCatalogDocument } from "src/DB/schemas/catalog/catalog.medicine.schema";
export default class MedicineCatalogRepoService extends DbRepoService<MedicineCatalogDocument> {
    private readonly medicineCatalogModel;
    constructor(medicineCatalogModel: Model<MedicineCatalogDocument>);
}
