import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationDto } from 'src/dtos/organization.dtos';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';

describe('OrganizationController', () => {
  let controller: OrganizationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationController],
      providers: [
        {
          provide: OrganizationService,
          useValue: {
            getOrganizations: jest.fn().mockResolvedValue([
              { name: 'testOrg1' },
              { name: 'testOrg2' },
              { name: 'testOrg3' },
            ]),
            createOrganization: jest
              .fn()
              .mockImplementation((organization: OrganizationDto) =>
                Promise.resolve({ id: 'a uuid', ...organization }),
              ),
          }
        }
      ]
    }).compile();

    controller = module.get<OrganizationController>(OrganizationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getOrganizations', () => {
    it('should get an array of organizations', async () => {
      await expect(controller.getOrganizations()).resolves.toEqual([
        {
          name: 'testOrg1'
        },
        {
          name: 'testOrg2'
        },
        {
          name: 'testOrg3'
        },
      ]);
    });
  });

  describe('createOrganization', () => {
    it('should create a new organization', async () => {
      const newOrganizationDTO: OrganizationDto = {
        name: 'testOrg1',
      };
      await expect(controller.createOrganization(newOrganizationDTO)).resolves.toEqual({
        id: 'a uuid',
        ...newOrganizationDTO,
      });
    });
  });
});
