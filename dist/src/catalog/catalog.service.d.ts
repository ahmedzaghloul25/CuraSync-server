import { DepartmentCatalogRepoService, DisposableCatalogRepoService, ImagingCatalogRepoService, LabCatalogRepoService, MedicineCatalogRepoService, ServiceCatalogRepoService, UnitCatalogRepoService, VendorCatalogRepoService } from "src/DB/repository/catalog/";
import { AddDepartmentCatArrayDto, AddUnitCatArrayDto } from "./Dto";
export declare class CatalogService {
    private readonly departmentCatRepoService;
    private readonly disposableCatRepoService;
    private readonly imagingCatRepoService;
    private readonly labCatRepoService;
    private readonly medicineCatRepoService;
    private readonly serviceCatRepoService;
    private readonly unitCatRepoService;
    private readonly vendorCatRepoService;
    constructor(departmentCatRepoService: DepartmentCatalogRepoService, disposableCatRepoService: DisposableCatalogRepoService, imagingCatRepoService: ImagingCatalogRepoService, labCatRepoService: LabCatalogRepoService, medicineCatRepoService: MedicineCatalogRepoService, serviceCatRepoService: ServiceCatalogRepoService, unitCatRepoService: UnitCatalogRepoService, vendorCatRepoService: VendorCatalogRepoService);
    addDepartmentCatalogArray(body: AddDepartmentCatArrayDto): Promise<{
        message: string;
        department: (import("mongoose").Document<unknown, {}, import("src/DB/schemas/catalog/catalog.department.schema").DepartmentCatalog, {}> & import("src/DB/schemas/catalog/catalog.department.schema").DepartmentCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("src/DB/schemas/catalog/catalog.department.schema").DepartmentCatalog, {}> & import("src/DB/schemas/catalog/catalog.department.schema").DepartmentCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    addUnitCatalogArray(body: AddUnitCatArrayDto): Promise<{
        message: string;
        units: (import("mongoose").Document<unknown, {}, import("src/DB/schemas/catalog/catalog.unit.schema").UnitCatalog, {}> & import("src/DB/schemas/catalog/catalog.unit.schema").UnitCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("src/DB/schemas/catalog/catalog.unit.schema").UnitCatalog, {}> & import("src/DB/schemas/catalog/catalog.unit.schema").UnitCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
}
