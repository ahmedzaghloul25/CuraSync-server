import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { _Types, CommonProps } from "common";
import { HydratedDocument, Types } from "mongoose";

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class File extends CommonProps {

  @Prop({
    enum: _Types.FileStatus,
    default: _Types.FileStatus.ACTIVE,
  })
  status: string;
}

export const FileSchema = SchemaFactory.createForClass(File);
export const FileModule = MongooseModule.forFeature([
  { name: File.name, schema: FileSchema },
]);
export type FileDocument = HydratedDocument<File>;
