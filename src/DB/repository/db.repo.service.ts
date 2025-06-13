import {
  DeleteResult,
  FilterQuery,
  Model,
  ProjectionType,
  Types,
  UpdateQuery,
  UpdateResult,
} from "mongoose";

export abstract class DbRepoService<T> {
  constructor(protected readonly model: Model<T>) {}

  async create(data: Partial<T> | Partial<T>[]): Promise<T | T[]> {
    return await this.model.create(data);
  }

  async findOne(
    query: FilterQuery<T>,
    populate: string = "",
    options?: ProjectionType<T>
  ): Promise<T | null> {
    return await this.model.findOne(query, options).populate(populate);
  }

  async findAll(
    query: FilterQuery<T>,
    options?: ProjectionType<T>,
    skip: number = 0,
    limit: number = 100,
    populate: string = ""
  ): Promise<T[] | never[]> {
    return await this.model
      .find(query, options)
      .skip(skip)
      .limit(limit)
      .populate(populate);
  }
  async count(query: FilterQuery<T>): Promise<number> {
    return await this.model.countDocuments(query);
  }

  async findById(
    id: Types.ObjectId,
    populate: string = "",
    options?: ProjectionType<T>
  ): Promise<T | null> {
    return await this.model.findById(id, options).populate(populate);
  }

  async deleteOne(query: FilterQuery<T>): Promise<DeleteResult> {
    return await this.model.deleteOne(query);
  }

  async deleteMany(query: FilterQuery<T>): Promise<DeleteResult> {
    return await this.model.deleteMany(query);
  }

  async findOneAndUpdate(
    query: FilterQuery<T>,
    data: UpdateQuery<T>
  ): Promise<T | null> {
    return await this.model.findOneAndUpdate(query, data, { new: true });
  }
  async findOneAndDelete(query: FilterQuery<T>): Promise<T | null> {
    return await this.model.findOneAndDelete(query);
  }
  async updateOne(
    query: FilterQuery<T>,
    data: UpdateQuery<T>
  ): Promise<UpdateResult> {
    return await this.model.updateOne(query, data);
  }
}
