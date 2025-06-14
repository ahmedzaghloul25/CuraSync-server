"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbRepoService = void 0;
class DbRepoService {
    model;
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        return await this.model.create(data);
    }
    async findOne(query, populate = "", options) {
        return await this.model.findOne(query, options).populate(populate);
    }
    async findAll(query, options, skip = 0, limit = 100, populate = "") {
        return await this.model
            .find(query, options)
            .skip(skip)
            .limit(limit)
            .populate(populate);
    }
    async count(query) {
        return await this.model.countDocuments(query);
    }
    async findById(id, populate = "", options) {
        return await this.model.findById(id, options).populate(populate);
    }
    async deleteOne(query) {
        return await this.model.deleteOne(query);
    }
    async deleteMany(query) {
        return await this.model.deleteMany(query);
    }
    async findOneAndUpdate(query, data) {
        return await this.model.findOneAndUpdate(query, data, { new: true });
    }
    async findOneAndDelete(query) {
        return await this.model.findOneAndDelete(query);
    }
    async updateOne(query, data) {
        return await this.model.updateOne(query, data);
    }
}
exports.DbRepoService = DbRepoService;
//# sourceMappingURL=db.repo.service.js.map