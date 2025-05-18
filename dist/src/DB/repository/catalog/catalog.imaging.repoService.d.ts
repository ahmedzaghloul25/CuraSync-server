import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { ImagingCatalogDocument } from "src/DB/schemas/catalog/catalog.imaging.schema";
export default class ImagingCatalogRepoService extends DbRepoService<ImagingCatalogDocument> {
    private readonly imagingCatalogModel;
    constructor(imagingCatalogModel: Model<ImagingCatalogDocument>);
}
