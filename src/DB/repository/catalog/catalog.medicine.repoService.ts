import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  MedicineCatalog,
  MedicineCatalogDocument,
} from "src/DB/schemas/catalog/catalog.medicine.schema";
import { _Types } from "common";

@Injectable()
export default class MedicineCatalogRepoService extends DbRepoService<MedicineCatalogDocument> {
  constructor(
    @InjectModel(MedicineCatalog.name, _Types.TYPES.connectionNameString.CATALOG)
    private readonly medicineCatalogModel: Model<MedicineCatalogDocument>
  ) {
    super(medicineCatalogModel);
  }
}
