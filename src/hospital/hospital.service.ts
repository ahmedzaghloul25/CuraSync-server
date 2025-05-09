import { Injectable } from '@nestjs/common';
import { DbRepoService } from 'src/DB/repository/db.repo.service';
import { HospitalDocument } from 'src/DB/schemas/hospital.schema';

@Injectable()
export class HospitalService {
    constructor(){}
}
