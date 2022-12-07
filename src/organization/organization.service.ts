import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganizationDto } from '../dtos/organization.dtos';
import { Organization } from '../entities';
import { Repository } from 'typeorm';

@Injectable()
export class OrganizationService {
    constructor(
        @InjectRepository(Organization) private readonly organizationRepository: Repository<Organization>,
      ) {}
          
      getOrganizations() {
        return this.organizationRepository.find();
      }

      createOrganization(organizationDto: OrganizationDto) {
        const newOrganization = this.organizationRepository.create(organizationDto);
        return this.organizationRepository.save(newOrganization);
      }
          
    //   findOrganizationById(id: number) {
    //     return this.organizationRepository.findOne(id);
    //   }
}
