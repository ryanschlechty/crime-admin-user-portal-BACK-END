import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities';
import { UserService } from './user.service';

const userArray = [
  new User('Test User 1', 'user1email@bsu.edu', true),
  new User('Test User 2', 'user2email@bsu.edu', true),
  new User('Test User 3', 'user3email@bsu.edu', true),
];

const testUser = new User('user1', 'useremail@bsu.edu', true);

describe('UserService', () => {
  let service: UserService;
  let repo: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            find: jest.fn().mockResolvedValue(userArray),
            save: jest.fn(),
            delete: jest.fn().mockResolvedValue(true),
            create: jest.fn().mockReturnValue(testUser),
          }
        }],
      
    }).compile();

    service = module.get<UserService>(UserService);
    repo = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getUsers', () => {
    it('should return an array of users', async () => {
      const users = await service.getUsers();
      expect(users).toEqual(userArray);
    });
  });

  describe('insert user', () => {
    it('should successfully insert a user', () => {
      expect(
        service.createUser({
          username: 'user1',
          email: 'useremail@bsu.edu',
          is_admin: true,
          organization_api_id: '12345'
        }),
      ).toEqual(testUser);
      expect(repo.create).toBeCalledTimes(1);
      expect(repo.create).toBeCalledWith({
        username: 'user1',
        email: 'useremail@bsu.edu',
        is_admin: true,
        organization_api_id: '12345'
      });
      expect(repo.save).toBeCalledTimes(1);
    });
  });
});
