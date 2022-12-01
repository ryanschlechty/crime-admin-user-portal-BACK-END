import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Organization } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class OrganizationService {
    constructor(
        @InjectRepository(OrganizationService) private readonly organizationRepository: Repository<Organization>,
      ) {}
          
      getOrganizations() {
        return this.organizationRepository.find();
      }

    //   createOrganization(createOrganizationDto: CreateOrganizationDto) {
    //     const newUser = this.organizationRepository.create(createOrganizationDto);
    //     return this.organizationRepository.save(newUser);
    //   }
          
    //   findOrganizationById(id: number) {
    //     return this.organizationRepository.findOne(id);
    //   }
}
