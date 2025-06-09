import { Injectable } from "@nestjs/common";
import { Types } from "mongoose";
import {
  DepartmentCatalogRepoService,
  DisposableCatalogRepoService,
  ImagingCatalogRepoService,
  LabCatalogRepoService,
  MedicineCatalogRepoService,
  ServiceCatalogRepoService,
  UnitCatalogRepoService,
} from "src/DB/repository/catalog";

export interface RepoService<T = any> {
  findById(id: Types.ObjectId): Promise<T | null>;
}

interface CatalogKey {
  fieldName: string;
  resultField: string;
  service: RepoService;
}

/**
 * Service responsible for resolving and enriching cross-database references
 * Used to fetch related catalog documents from different collections
 */
@Injectable()
export class CrossDbResolverService {
  private readonly keys: readonly CatalogKey[];

  constructor(
    private readonly departmentCatalogRepoService: DepartmentCatalogRepoService,
    private readonly disposableCatalogRepoService: DisposableCatalogRepoService,
    private readonly imagingCatalogRepoService: ImagingCatalogRepoService,
    private readonly labCatalogRepoService: LabCatalogRepoService,
    private readonly medicationCatalogRepoService: MedicineCatalogRepoService,
    private readonly serviceCatalogRepoService: ServiceCatalogRepoService,
    private readonly unitCatalogRepoService: UnitCatalogRepoService
  ) {
    this.keys = Object.freeze([
      {
        fieldName: "departmentCatalogId",
        resultField: "department",
        service: this.departmentCatalogRepoService,
      },
      {
        fieldName: "disposableCatalogId",
        resultField: "disposable",
        service: this.disposableCatalogRepoService,
      },
      {
        fieldName: "imagingCatalogId",
        resultField: "imaging",
        service: this.imagingCatalogRepoService,
      },
      {
        fieldName: "labCatalogId",
        resultField: "lab",
        service: this.labCatalogRepoService,
      },
      {
        fieldName: "medicineCatalogId",
        resultField: "medicine",
        service: this.medicationCatalogRepoService,
      },
      {
        fieldName: "serviceCatalogId",
        resultField: "service",
        service: this.serviceCatalogRepoService,
      },
      {
        fieldName: "unitCatalogId",
        resultField: "unit",
        service: this.unitCatalogRepoService,
      },
    ]);
  }

  /**
   * Enriches a document by resolving all its catalog references
   * @param document - The document containing catalog reference IDs
   * @returns Promise resolving to an enriched document with resolved catalog references
   * @example
   * // Input document
   * { departmentCatalogId: '123', name: 'test' }
   * // Output document
   * { departmentCatalogId: '123', name: 'test', department: { _id: '123', name: 'Department' } }
   */
  async enrichReferences(document: any) {
    const result = { ...document };

    for (const key of this.keys) {
      if (document[key.fieldName]) {
        result[key.resultField] = await key.service.findById(
          document[key.fieldName]
        );
      }
    }

    return result;
  }
}
