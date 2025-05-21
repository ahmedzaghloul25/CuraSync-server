import { DeleteResult, FilterQuery, Model, Types, UpdateQuery, UpdateResult } from "mongoose";
export declare abstract class DbRepoService<T> {
    protected readonly model: Model<T>;
    constructor(model: Model<T>);
    create(data: Partial<T | T[]>): Promise<T | T[]>;
    findOne(query: FilterQuery<T>): Promise<T | null>;
    findAll(query: FilterQuery<T>): Promise<T[] | never[]>;
    findById(id: Types.ObjectId): Promise<T | null>;
    deleteOne(query: FilterQuery<T>): Promise<DeleteResult>;
    deleteMany(query: FilterQuery<T>): Promise<DeleteResult>;
    findOneAndUpdate(query: FilterQuery<T>, data: UpdateQuery<T>): Promise<T | null>;
    findOneAndDelete(query: FilterQuery<T>): Promise<T | null>;
    updateOne(query: FilterQuery<T>, data: UpdateQuery<T>): Promise<UpdateResult>;
}
