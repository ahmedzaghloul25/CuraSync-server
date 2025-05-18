import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import {
  DepartmentCatalog,
  DepartmentCatalogDocument,
} from "src/DB/schemas/catalog/catalog.department.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { _Types } from "common";
import { _slugify } from "common/utils";

@Injectable()
export default class DepartmentCatalogRepoService extends DbRepoService<DepartmentCatalogDocument> {
  constructor(
    @InjectModel(
      DepartmentCatalog.name,
      _Types.TYPES.connectionNameString.CATALOG
    )
    private readonly departmentCatalogModel: Model<DepartmentCatalogDocument>
  ) {
    super(departmentCatalogModel);
  }
}
