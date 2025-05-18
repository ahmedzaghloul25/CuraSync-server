import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { AddDepartmentCatArrayDto, AddDepartmentCatDto, AddUnitCatArrayDto } from './Dto';

@Controller({version : '1', path : 'catalog'})
export class CatalogController {
    constructor(private readonly catalogService : CatalogService){}

    @Post('departments/new')
    @HttpCode(201)
    addDepartmentCatalog(@Body() body : AddDepartmentCatArrayDto){
        return this.catalogService.addDepartmentCatalogArray(body)
    }

    @Post('units/new')
    @HttpCode(201)
    addUnitsCatalog(@Body() body : AddUnitCatArrayDto){
        return this.catalogService.addUnitCatalogArray(body)
    }
}
