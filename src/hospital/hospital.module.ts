import { Module } from '@nestjs/common';
import { HospitalController } from './hospital.controller';
import { HospitalService } from './hospital.service';
import { DbRepoService } from 'src/DB/repository/db.repo.service';
import { HospitalDocument } from 'src/DB/schemas/hospital.schema';

@Module({
  imports : [],
  controllers: [HospitalController],
  providers: [HospitalService]
})
export class HospitalModule {}
