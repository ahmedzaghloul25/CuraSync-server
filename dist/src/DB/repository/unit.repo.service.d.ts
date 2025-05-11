import { DbRepoService } from "./db.repo.service";
import { UnitDocument } from "../schemas/unit.schema";
import { Model } from "mongoose";
export default class UnitRepoService extends DbRepoService<UnitDocument> {
    private readonly unitModel;
    constructor(unitModel: Model<UnitDocument>);
}
