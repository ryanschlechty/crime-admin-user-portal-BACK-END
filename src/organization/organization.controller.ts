import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrganizationDto } from '../dtos/organization.dtos';
import { OrganizationService } from './organization.service';

@Controller('organizations')
export class OrganizationController {
    constructor(private readonly organizationService: OrganizationService) {}
  
  @Get()
  getOrganizations() {
    return this.organizationService.getOrganizations();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createOrganization(@Body() organizationDto: OrganizationDto) {
    return this.organizationService.createOrganization(organizationDto);
  }
  
//   @Get('id/:id')
//   findOrganizationById(@Param('id', ParseIntPipe) id: number) {
//     return this.organizationService.findOrganizationById(id);
//   }
}
