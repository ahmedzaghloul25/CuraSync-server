import { Injectable } from "@nestjs/common";
import {
  DepartmentCatalogRepoService,
  DisposableCatalogRepoService,
  ImagingCatalogRepoService,
  LabCatalogRepoService,
  MedicineCatalogRepoService,
  ServiceCatalogRepoService,
  UnitCatalogRepoService,
  VendorCatalogRepoService,
} from "src/DB/repository/catalog/";
import {AddDepartmentCatArrayDto, AddUnitCatArrayDto} from "./Dto";
import { _slugify } from "common/utils";
import { DepartmentCatalogDocument } from "src/DB/schemas/catalog/catalog.department.schema";
import { UnitCatalogDocument } from "src/DB/schemas/catalog/catalog.unit.schema";

@Injectable()
export class CatalogService {
  constructor(
    private readonly departmentCatRepoService: DepartmentCatalogRepoService,
    private readonly disposableCatRepoService: DisposableCatalogRepoService,
    private readonly imagingCatRepoService: ImagingCatalogRepoService,
    private readonly labCatRepoService: LabCatalogRepoService,
    private readonly medicineCatRepoService: MedicineCatalogRepoService,
    private readonly serviceCatRepoService: ServiceCatalogRepoService,
    private readonly unitCatRepoService: UnitCatalogRepoService,
    private readonly vendorCatRepoService: VendorCatalogRepoService
  ) {}

  async addDepartmentCatalogArray(body: AddDepartmentCatArrayDto){
    const department = await this.departmentCatRepoService.create(body.departments as Partial<DepartmentCatalogDocument[]>)
    return {message : 'success', department}
  }

  async addUnitCatalogArray(body : AddUnitCatArrayDto){
    const units = await this.unitCatRepoService.create(body.units as Partial<UnitCatalogDocument[]>)
    return {message : 'success', units}
  }
}
