import { FileDocument } from "../schemas/file.schema";
import { DbRepoService } from "./db.repo.service";
import { Model } from "mongoose";
export declare class FileRepoService extends DbRepoService<FileDocument> {
    private readonly fileModel;
    constructor(fileModel: Model<FileDocument>);
}
