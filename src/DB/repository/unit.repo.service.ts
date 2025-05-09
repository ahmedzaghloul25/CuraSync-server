import { Injectable } from "@nestjs/common";
import { DbRepoService } from "./db.repo.service";
import { Unit, UnitDocument } from "../schemas/unit.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export default class UnitRepoService extends DbRepoService<UnitDocument> {
  constructor(
    @InjectModel(Unit.name) private readonly unitModel: Model<UnitDocument>
  ) {
    super(unitModel);
  }
}
