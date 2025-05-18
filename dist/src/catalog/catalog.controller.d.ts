import { CatalogService } from './catalog.service';
import { AddDepartmentCatArrayDto, AddUnitCatArrayDto } from './Dto';
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
}
