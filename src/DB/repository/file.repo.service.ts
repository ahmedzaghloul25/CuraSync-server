import { InjectModel } from "@nestjs/mongoose";
import { File, FileDocument } from "../schemas/file.schema";
import { DbRepoService } from "./db.repo.service";
import { Model } from "mongoose";

export class FileRepoService extends DbRepoService<FileDocument> {
  constructor(
    @InjectModel(File.name) private readonly fileModel: Model<FileDocument> ) {
    super(fileModel);
  }
  
}
