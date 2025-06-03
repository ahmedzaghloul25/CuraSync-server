import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  VendorCatalog,
  VendorCatalogDocument,
} from "src/DB/schemas/catalog/catalog.vendor.schema";
import { TYPES } from "common/types";

@Injectable()
export default class VendorCatalogRepoService extends DbRepoService<VendorCatalogDocument> {
  constructor(
    @InjectModel(VendorCatalog.name, TYPES.connectionNameString.CATALOG)
    private readonly vendorCatalogModel: Model<VendorCatalogDocument>
  ) {
    super(vendorCatalogModel);
  }
}
