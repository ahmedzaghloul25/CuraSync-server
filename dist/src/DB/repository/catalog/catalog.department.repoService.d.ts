import { DbRepoService } from "../db.repo.service";
import { DepartmentCatalogDocument } from "src/DB/schemas/catalog/catalog.department.schema";
import { Model } from "mongoose";
export default class DepartmentCatalogRepoService extends DbRepoService<DepartmentCatalogDocument> {
    private readonly departmentCatalogModel;
    constructor(departmentCatalogModel: Model<DepartmentCatalogDocument>);
}
