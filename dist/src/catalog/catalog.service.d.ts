import { DepartmentCatalogRepoService, DisposableCatalogRepoService, ImagingCatalogRepoService, LabCatalogRepoService, MedicineCatalogRepoService, ServiceCatalogRepoService, UnitCatalogRepoService, VendorCatalogRepoService } from "src/DB/repository/catalog/";
import { AddDepartmentCatArrayDto, AddDisposableCatalogArrayDto, AddLabCatalogArrayDto, AddMedicineCatalogArrayDto, AddServiceCatArrayDto, AddUnitCatArrayDto, AddVendorCatalogArrayDto } from "./Dto";
import { AddImagingCatalogArrayDto } from "./Dto/addImagingCatDto";
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
    addServiceCatalogArray(body: AddServiceCatArrayDto): Promise<{
        message: string;
        services: (import("mongoose").Document<unknown, {}, import("src/DB/schemas/catalog/catalog.service.schema").ServiceCatalog, {}> & import("src/DB/schemas/catalog/catalog.service.schema").ServiceCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("src/DB/schemas/catalog/catalog.service.schema").ServiceCatalog, {}> & import("src/DB/schemas/catalog/catalog.service.schema").ServiceCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    addLabCatalogArray(body: AddLabCatalogArrayDto): Promise<{
        message: string;
        laboratories: (import("mongoose").Document<unknown, {}, import("src/DB/schemas/catalog/catalog.lab.schema").LabCatalog, {}> & import("src/DB/schemas/catalog/catalog.lab.schema").LabCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("src/DB/schemas/catalog/catalog.lab.schema").LabCatalog, {}> & import("src/DB/schemas/catalog/catalog.lab.schema").LabCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    addImagingCatalogArray(body: AddImagingCatalogArrayDto): Promise<{
        message: string;
        imagings: (import("mongoose").Document<unknown, {}, import("src/DB/schemas/catalog/catalog.imaging.schema").ImagingCatalog, {}> & import("src/DB/schemas/catalog/catalog.imaging.schema").ImagingCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("src/DB/schemas/catalog/catalog.imaging.schema").ImagingCatalog, {}> & import("src/DB/schemas/catalog/catalog.imaging.schema").ImagingCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    addMedicineCatalogArray(body: AddMedicineCatalogArrayDto): Promise<{
        message: string;
        medicines: (import("mongoose").Document<unknown, {}, import("src/DB/schemas/catalog/catalog.medicine.schema").MedicineCatalog, {}> & import("src/DB/schemas/catalog/catalog.medicine.schema").MedicineCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("src/DB/schemas/catalog/catalog.medicine.schema").MedicineCatalog, {}> & import("src/DB/schemas/catalog/catalog.medicine.schema").MedicineCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    addDisposableCatalogArray(body: AddDisposableCatalogArrayDto): Promise<{
        message: string;
        disposables: (import("mongoose").Document<unknown, {}, import("src/DB/schemas/catalog/catalog.disposable.schema").DisposableCatalog, {}> & import("src/DB/schemas/catalog/catalog.disposable.schema").DisposableCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("src/DB/schemas/catalog/catalog.disposable.schema").DisposableCatalog, {}> & import("src/DB/schemas/catalog/catalog.disposable.schema").DisposableCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    addVendorCatalogArray(body: AddVendorCatalogArrayDto): Promise<{
        message: string;
        vendors: (import("mongoose").Document<unknown, {}, import("src/DB/schemas/catalog/catalog.vendor.schema").VendorCatalog, {}> & import("src/DB/schemas/catalog/catalog.vendor.schema").VendorCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("src/DB/schemas/catalog/catalog.vendor.schema").VendorCatalog, {}> & import("src/DB/schemas/catalog/catalog.vendor.schema").VendorCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
}
