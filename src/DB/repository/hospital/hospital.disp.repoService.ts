import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  HospitalDisposable,
  HospitalDisposableDocument,
} from "src/DB/schemas/hospital/hospital.disposable.schema";
import { connectionNameString } from "common/types";

@Injectable()
export default class HospitalDisposableRepoService extends DbRepoService<HospitalDisposableDocument> {
  constructor(
    @InjectModel(
      HospitalDisposable.name,
      connectionNameString.HOSPITAL
    )
    private readonly disposableModel: Model<HospitalDisposableDocument>
  ) {
    super(disposableModel);
  }
}
