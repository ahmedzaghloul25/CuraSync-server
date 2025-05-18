import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  UnitCatalog,
  UnitCatalogDocument,
} from "src/DB/schemas/catalog/catalog.unit.schema";
import { _Types } from "common";

@Injectable()
export default class UnitCatalogRepoService extends DbRepoService<UnitCatalogDocument> {
  constructor(
    @InjectModel(UnitCatalog.name, _Types.TYPES.connectionNameString.CATALOG)
    private readonly unitCatalogModel: Model<UnitCatalogDocument>
  ) {
    super(unitCatalogModel);
  }
}
