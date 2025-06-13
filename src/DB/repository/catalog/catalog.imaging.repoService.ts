import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  ImagingCatalog,
  ImagingCatalogDocument,
} from "src/DB/schemas/catalog/catalog.imaging.schema";
import { connectionNameString } from "common/types";

@Injectable()
export default class ImagingCatalogRepoService extends DbRepoService<ImagingCatalogDocument> {
  constructor(
    @InjectModel(ImagingCatalog.name, connectionNameString.CATALOG)
    private readonly imagingCatalogModel: Model<ImagingCatalogDocument>
  ) {
    super(imagingCatalogModel);
  }
}
