import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { CatalogService } from "./catalog.service";
import {
  AddDepartmentCatArrayDto,
  AddDepartmentCatDto,
  AddDisposableCatalogArrayDto,
  AddLabCatalogArrayDto,
  AddMedicineCatalogArrayDto,
  AddServiceCatArrayDto,
  AddUnitCatArrayDto,
  AddVendorCatalogArrayDto,
} from "./DTO";
import { AddImagingCatalogArrayDto } from "./DTO/addImagingCatDto";

@Controller({ version: "1", path: "catalog" })
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Post("departments/new")
  @HttpCode(201)
  addDepartmentCatalog(@Body() body: AddDepartmentCatArrayDto) {
    return this.catalogService.addDepartmentCatalogArray(body);
  }

  @Post("units/new")
  @HttpCode(201)
  addUnitsCatalog(@Body() body: AddUnitCatArrayDto) {
    return this.catalogService.addUnitCatalogArray(body);
  }

  @Post("services/new")
  @HttpCode(201)
  addServicesCatalog(@Body() body: AddServiceCatArrayDto) {
    return this.catalogService.addServiceCatalogArray(body);
  }

  @Post("laboratories/new")
  @HttpCode(201)
  addLabCatalog(@Body() body: AddLabCatalogArrayDto) {
    return this.catalogService.addLabCatalogArray(body);
  }

  @Post("imagings/new")
  @HttpCode(201)
  addImagingCatalog(@Body() body: AddImagingCatalogArrayDto) {
    return this.catalogService.addImagingCatalogArray(body);
  }

  @Post("medicines/new")
  @HttpCode(201)
  addMedicineCatalog(@Body() body: AddMedicineCatalogArrayDto) {
    return this.catalogService.addMedicineCatalogArray(body);
  }

  @Post("disposables/new")
  @HttpCode(201)
  addDisposableCatalog(@Body() body: AddDisposableCatalogArrayDto) {
    return this.catalogService.addDisposableCatalogArray(body);
  }

  @Post("vendors/new")
  @HttpCode(201)
  addVendorCatalog(@Body() body: AddVendorCatalogArrayDto) {
    return this.catalogService.addVendorCatalogArray(body);
  }
}
