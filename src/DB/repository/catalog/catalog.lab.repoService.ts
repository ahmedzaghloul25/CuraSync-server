import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  LabCatalog,
  LabCatalogDocument,
} from "src/DB/schemas/catalog/catalog.lab.schema";
import { _Types } from "common";

@Injectable()
export default class LabCatalogRepoService extends DbRepoService<LabCatalogDocument> {
  constructor(
    @InjectModel(LabCatalog.name, _Types.TYPES.connectionNameString.CATALOG)
    private readonly labCatalogModel: Model<LabCatalogDocument>
  ) {
    super(labCatalogModel);
  }
}
