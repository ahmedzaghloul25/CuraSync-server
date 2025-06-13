import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import {
  DepartmentCatalog,
  DepartmentCatalogDocument,
} from "src/DB/schemas/catalog/catalog.department.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { _slugify } from "common/utils";
import { connectionNameString } from "common/types";

@Injectable()
export default class DepartmentCatalogRepoService extends DbRepoService<DepartmentCatalogDocument> {
  constructor(
    @InjectModel(
      DepartmentCatalog.name,
      connectionNameString.CATALOG
    )
    private readonly departmentCatalogModel: Model<DepartmentCatalogDocument>
  ) {
    super(departmentCatalogModel);
  }
}
