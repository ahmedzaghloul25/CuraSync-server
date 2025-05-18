// import { Injectable } from "@nestjs/common";
// import HospitalRepoService from "src/DB/repository/hospital.repo.service";
// import EmployeeRepoService from "src/DB/repository/employee.repo.service";
// import { Types } from "mongoose";
// import { DbRepoService } from "src/DB/repository/db.repo.service";

// export interface RepoService<T = any> {
//   findById(id: Types.ObjectId): Promise<T | null>;
// }
// @Injectable()
// export class CrossDbResolverService {
//   constructor() {}

//   // async resolveHospitalId(hospitalId: string) {
//   //   return this.hospitalRepoService.findById(new Types.ObjectId(hospitalId));
//   // }

//   // async resolveEmployeeId(employeeId: string) {
//   //   return this.employeeRepoService.findById(new Types.ObjectId(employeeId));
//   // }

//   async resolveId(id: Types.ObjectId, repoService: RepoService) {
//     return await repoService.findById(id);
//   }

//   async enrichReferences(
//     document: any,
//     fieldName: string,
//     id: Types.ObjectId,
//     repoService: RepoService
//   ) {
//     const result = { ...document };

//     // if (item.addedByHospitalId) {
//     //   result.hospital = await this.resolveHospitalId(item.addedByHospitalId);
//     // }

//     // if (item.addedByEmployeeId) {
//     //   result.employee = await this.resolveEmployeeId(item.addedByEmployeeId);
//     // }
//     result[fieldName] = await this.resolveId(id, repoService);

//     return result;
//   }
// }
