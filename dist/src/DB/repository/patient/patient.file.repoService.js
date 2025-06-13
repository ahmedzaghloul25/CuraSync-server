"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_repo_service_1 = require("../db.repo.service");
const mongoose_1 = require("@nestjs/mongoose");
const types_1 = require("../../../../common/types");
const mongoose_2 = require("mongoose");
const patient_file_schema_1 = require("../../schemas/patient/patient.file.schema");
let PatientFileRepoService = class PatientFileRepoService extends db_repo_service_1.DbRepoService {
    fileModel;
    constructor(fileModel) {
        super(fileModel);
        this.fileModel = fileModel;
    }
};
PatientFileRepoService = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(patient_file_schema_1.PatientFile.name, types_1.connectionNameString.HOSPITAL)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PatientFileRepoService);
exports.default = PatientFileRepoService;
//# sourceMappingURL=patient.file.repoService.js.map