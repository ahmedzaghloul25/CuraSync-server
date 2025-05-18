import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { DisposableCatalogDocument } from "src/DB/schemas/catalog/catalog.disposable.schema";
export default class DisposableCatalogRepoService extends DbRepoService<DisposableCatalogDocument> {
    private readonly disposableCatalogModel;
    constructor(disposableCatalogModel: Model<DisposableCatalogDocument>);
}
