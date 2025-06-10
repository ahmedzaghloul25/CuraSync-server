import { DeleteResult, FilterQuery, Model, ProjectionType, Types, UpdateQuery, UpdateResult } from "mongoose";
export declare abstract class DbRepoService<T> {
    protected readonly model: Model<T>;
    constructor(model: Model<T>);
    create(data: Partial<T> | Partial<T>[]): Promise<T | T[]>;
    findOne(query: FilterQuery<T>, options?: ProjectionType<T>): Promise<T | null>;
    findAll(query: FilterQuery<T>, options: ProjectionType<T>, skip?: number, limit?: number): Promise<T[] | never[]>;
    count(query: FilterQuery<T>): Promise<number>;
    findById(id: Types.ObjectId): Promise<T | null>;
    deleteOne(query: FilterQuery<T>): Promise<DeleteResult>;
    deleteMany(query: FilterQuery<T>): Promise<DeleteResult>;
    findOneAndUpdate(query: FilterQuery<T>, data: UpdateQuery<T>): Promise<T | null>;
    findOneAndDelete(query: FilterQuery<T>): Promise<T | null>;
    updateOne(query: FilterQuery<T>, data: UpdateQuery<T>): Promise<UpdateResult>;
}
