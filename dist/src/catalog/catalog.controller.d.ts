import { CatalogService } from "./catalog.service";
import { AddDepartmentCatArrayDto, AddDisposableCatalogArrayDto, AddLabCatalogArrayDto, AddMedicineCatalogArrayDto, AddServiceCatArrayDto, AddUnitCatArrayDto, AddVendorCatalogArrayDto } from "./Dto";
import { AddImagingCatalogArrayDto } from "./Dto/addImagingCatDto";
export declare class CatalogController {
    private readonly catalogService;
    constructor(catalogService: CatalogService);
    addDepartmentCatalog(body: AddDepartmentCatArrayDto): Promise<{
        message: string;
        department: (import("mongoose").Document<unknown, {}, import("../DB/schemas/catalog/catalog.department.schema").DepartmentCatalog, {}> & import("../DB/schemas/catalog/catalog.department.schema").DepartmentCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("../DB/schemas/catalog/catalog.department.schema").DepartmentCatalog, {}> & import("../DB/schemas/catalog/catalog.department.schema").DepartmentCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    addUnitsCatalog(body: AddUnitCatArrayDto): Promise<{
        message: string;
        units: (import("mongoose").Document<unknown, {}, import("../DB/schemas/catalog/catalog.unit.schema").UnitCatalog, {}> & import("../DB/schemas/catalog/catalog.unit.schema").UnitCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("../DB/schemas/catalog/catalog.unit.schema").UnitCatalog, {}> & import("../DB/schemas/catalog/catalog.unit.schema").UnitCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    addServicesCatalog(body: AddServiceCatArrayDto): Promise<{
        message: string;
        services: (import("mongoose").Document<unknown, {}, import("../DB/schemas/catalog/catalog.service.schema").ServiceCatalog, {}> & import("../DB/schemas/catalog/catalog.service.schema").ServiceCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("../DB/schemas/catalog/catalog.service.schema").ServiceCatalog, {}> & import("../DB/schemas/catalog/catalog.service.schema").ServiceCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    addLabCatalog(body: AddLabCatalogArrayDto): Promise<{
        message: string;
        laboratories: (import("mongoose").Document<unknown, {}, import("../DB/schemas/catalog/catalog.lab.schema").LabCatalog, {}> & import("../DB/schemas/catalog/catalog.lab.schema").LabCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("../DB/schemas/catalog/catalog.lab.schema").LabCatalog, {}> & import("../DB/schemas/catalog/catalog.lab.schema").LabCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    addImagingCatalog(body: AddImagingCatalogArrayDto): Promise<{
        message: string;
        imagings: (import("mongoose").Document<unknown, {}, import("../DB/schemas/catalog/catalog.imaging.schema").ImagingCatalog, {}> & import("../DB/schemas/catalog/catalog.imaging.schema").ImagingCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("../DB/schemas/catalog/catalog.imaging.schema").ImagingCatalog, {}> & import("../DB/schemas/catalog/catalog.imaging.schema").ImagingCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    addMedicineCatalog(body: AddMedicineCatalogArrayDto): Promise<{
        message: string;
        medicines: (import("mongoose").Document<unknown, {}, import("../DB/schemas/catalog/catalog.medicine.schema").MedicineCatalog, {}> & import("../DB/schemas/catalog/catalog.medicine.schema").MedicineCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("../DB/schemas/catalog/catalog.medicine.schema").MedicineCatalog, {}> & import("../DB/schemas/catalog/catalog.medicine.schema").MedicineCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    addDisposableCatalog(body: AddDisposableCatalogArrayDto): Promise<{
        message: string;
        disposables: (import("mongoose").Document<unknown, {}, import("../DB/schemas/catalog/catalog.disposable.schema").DisposableCatalog, {}> & import("../DB/schemas/catalog/catalog.disposable.schema").DisposableCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("../DB/schemas/catalog/catalog.disposable.schema").DisposableCatalog, {}> & import("../DB/schemas/catalog/catalog.disposable.schema").DisposableCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
    addVendorCatalog(body: AddVendorCatalogArrayDto): Promise<{
        message: string;
        vendors: (import("mongoose").Document<unknown, {}, import("../DB/schemas/catalog/catalog.vendor.schema").VendorCatalog, {}> & import("../DB/schemas/catalog/catalog.vendor.schema").VendorCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, import("../DB/schemas/catalog/catalog.vendor.schema").VendorCatalog, {}> & import("../DB/schemas/catalog/catalog.vendor.schema").VendorCatalog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
    }>;
}
