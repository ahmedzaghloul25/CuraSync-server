import { Injectable } from "@nestjs/common";
import { DbRepoService } from "../db.repo.service";
import { InjectModel } from "@nestjs/mongoose";
import { _Types } from "common";
import { Model } from "mongoose";
import {
  HospitalDisposable,
  HospitalDisposableDocument,
} from "src/DB/schemas/hospital/hospital.disposable.schema";

@Injectable()
export default class HospitalDisposableRepoService extends DbRepoService<HospitalDisposableDocument> {
  constructor(
    @InjectModel(
      HospitalDisposable.name,
      _Types.TYPES.connectionNameString.HOSPITAL
    )
    private readonly disposableModel: Model<HospitalDisposableDocument>
  ) {
    super(disposableModel);
  }
}
