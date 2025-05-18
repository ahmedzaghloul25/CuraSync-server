import { DbRepoService } from "../db.repo.service";
import { Model } from "mongoose";
import { VendorCatalogDocument } from "src/DB/schemas/catalog/catalog.vendor.schema";
export default class VendorCatalogRepoService extends DbRepoService<VendorCatalogDocument> {
    private readonly vendorCatalogModel;
    constructor(vendorCatalogModel: Model<VendorCatalogDocument>);
}
