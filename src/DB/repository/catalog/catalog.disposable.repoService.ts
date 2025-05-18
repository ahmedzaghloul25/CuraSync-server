import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  DisposableCatalog,
  DisposableCatalogDocument,
} from "src/DB/schemas/catalog/catalog.disposable.schema";
import { _Types } from "common";

@Injectable()
export default class DisposableCatalogRepoService extends DbRepoService<DisposableCatalogDocument> {
  constructor(
    @InjectModel(
      DisposableCatalog.name,
      _Types.TYPES.connectionNameString.CATALOG
    )
    private readonly disposableCatalogModel: Model<DisposableCatalogDocument>
  ) {
    super(disposableCatalogModel);
  }
}
