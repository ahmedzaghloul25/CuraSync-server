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
import {
  AddDepartmentCatArrayDto,
  AddDisposableCatalogArrayDto,
  AddLabCatalogArrayDto,
  AddMedicineCatalogArrayDto,
  AddServiceCatArrayDto,
  AddUnitCatArrayDto,
  AddVendorCatalogArrayDto,
} from "./DTO";
import { _slugify } from "common/utils";
import { DepartmentCatalogDocument } from "src/DB/schemas/catalog/catalog.department.schema";
import { UnitCatalogDocument } from "src/DB/schemas/catalog/catalog.unit.schema";
import { ServiceCatalogDocument } from "src/DB/schemas/catalog/catalog.service.schema";
import { LabCatalogDocument } from "src/DB/schemas/catalog/catalog.lab.schema";
import { AddImagingCatalogArrayDto } from "./DTO/addImagingCatDto";
import { ImagingCatalogDocument } from "src/DB/schemas/catalog/catalog.imaging.schema";
import { MedicineCatalogDocument } from "src/DB/schemas/catalog/catalog.medicine.schema";
import { DisposableCatalogDocument } from "src/DB/schemas/catalog/catalog.disposable.schema";
import { VendorCatalogDocument } from "src/DB/schemas/catalog/catalog.vendor.schema";

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

  async addDepartmentCatalogArray(body: AddDepartmentCatArrayDto) {
    const department = await this.departmentCatRepoService.create(
      body.departments as Partial<DepartmentCatalogDocument[]>
    );
    return { message: "success", department };
  }

  async addUnitCatalogArray(body: AddUnitCatArrayDto) {
    const units = await this.unitCatRepoService.create(
      body.units as Partial<UnitCatalogDocument[]>
    );
    return { message: "success", units };
  }

  async addServiceCatalogArray(body: AddServiceCatArrayDto) {
    const services = await this.serviceCatRepoService.create(
      body.services as Partial<ServiceCatalogDocument[]>
    );
    return { message: "success", services };
  }

  async addLabCatalogArray(body: AddLabCatalogArrayDto) {
    const laboratories = await this.labCatRepoService.create(
      body.laboratories as Partial<LabCatalogDocument[]>
    );
    return { message: "success", laboratories };
  }

  async addImagingCatalogArray(body: AddImagingCatalogArrayDto) {
    const imagings = await this.imagingCatRepoService.create(
      body.imagings as Partial<ImagingCatalogDocument[]>
    );
    return { message: "success", imagings };
  }

  async addMedicineCatalogArray(body: AddMedicineCatalogArrayDto) {
    const medicines = await this.medicineCatRepoService.create(
      body.medicines as Partial<MedicineCatalogDocument[]>
    );
    return { message: "success", medicines };
  }

  async addDisposableCatalogArray(body: AddDisposableCatalogArrayDto) {
    const disposables = await this.disposableCatRepoService.create(
      body.disposables as Partial<DisposableCatalogDocument[]>
    );
    return { message: "success", disposables };
  }

  async addVendorCatalogArray(body: AddVendorCatalogArrayDto) {
    const vendors = await this.vendorCatRepoService.create(
      body.vendors as Partial<VendorCatalogDocument[]>
    );
    return { message: "success", vendors };
  }
}
