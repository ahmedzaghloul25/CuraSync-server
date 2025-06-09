import { Types } from "mongoose";
import { DepartmentCatalogRepoService, DisposableCatalogRepoService, ImagingCatalogRepoService, LabCatalogRepoService, MedicineCatalogRepoService, ServiceCatalogRepoService, UnitCatalogRepoService } from "src/DB/repository/catalog";
export interface RepoService<T = any> {
    findById(id: Types.ObjectId): Promise<T | null>;
}
export declare class CrossDbResolverService {
    private readonly departmentCatalogRepoService;
    private readonly disposableCatalogRepoService;
    private readonly imagingCatalogRepoService;
    private readonly labCatalogRepoService;
    private readonly medicationCatalogRepoService;
    private readonly serviceCatalogRepoService;
    private readonly unitCatalogRepoService;
    private readonly keys;
    constructor(departmentCatalogRepoService: DepartmentCatalogRepoService, disposableCatalogRepoService: DisposableCatalogRepoService, imagingCatalogRepoService: ImagingCatalogRepoService, labCatalogRepoService: LabCatalogRepoService, medicationCatalogRepoService: MedicineCatalogRepoService, serviceCatalogRepoService: ServiceCatalogRepoService, unitCatalogRepoService: UnitCatalogRepoService);
    enrichReferences(document: any): Promise<any>;
}
