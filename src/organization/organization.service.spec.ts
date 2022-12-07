import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from '../entities';
import { OrganizationService } from './organization.service';

const organizationArray = [
  new Organization('Test Organization 1'),
  new Organization('Test Organization 2'),
  new Organization('Test Organization 3'),
];

const testOrganization = new Organization('testOrganization');

describe('OrganizationService', () => {
  let service: OrganizationService;
  let repo: Repository<Organization>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrganizationService,
      {
        provide: getRepositoryToken(Organization),
        useValue: {
          find: jest.fn().mockResolvedValue(organizationArray),
          create: jest.fn().mockReturnValue(testOrganization),
          save: jest.fn(),
        }
      }],
    }).compile();

    service = module.get<OrganizationService>(OrganizationService);
    repo = module.get<Repository<Organization>>(getRepositoryToken(Organization));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('get organizations', () => {
    it('should return an array of organizations', async () => {
      const users = await service.getOrganizations();
      expect(users).toEqual(organizationArray);
    });
  });

  //TODO: fix receiving undefined value from create method
  // describe('insert organization', () => {
  //   it('should successfully insert an organization', () => {
  //     expect(
  //       service.createOrganization({
  //         name: 'testOrganization',
  //       }),
  //     ).toEqual(testOrganization);
  //     expect(repo.create).toBeCalledTimes(1);
  //     expect(repo.create).toBeCalledWith({
  //       name: 'testOrganization',
  //     });
  //     expect(repo.save).toBeCalledTimes(1);
  //   });
  // });
});
