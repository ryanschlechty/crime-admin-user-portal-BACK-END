import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrganizationService } from './organization.service';

@Controller('organization')
export class OrganizationController {
    constructor(private readonly organizationService: OrganizationService) {}
  
  @Get()
  getOrganizations() {
    return this.organizationService.getOrganizations();
  }
  
//   @Get('id/:id')
//   findOrganizationById(@Param('id', ParseIntPipe) id: number) {
//     return this.organizationService.findOrganizationById(id);
//   }
  
//   @Post('create')
//   @UsePipes(ValidationPipe)
//   createOrganization(@Body() createOrganizationDto: CreateOrganizationDto) {
//     return this.organizationService.createOrganization(createOrganizationDto);
//   }
}
