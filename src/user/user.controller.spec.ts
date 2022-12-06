import { Test, TestingModule } from '@nestjs/testing';
import { UserDto } from 'src/dtos/user.dtos';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            getUsers: jest.fn().mockResolvedValue([
              { username: 'testUser1', email: 'testEmail1', is_admin: true },
              { username: 'testUser2', email: 'testEmail2', is_admin: true },
              { username: 'testUser3', email: 'testEmail3', is_admin: true },
            ]),
            createUser: jest
              .fn()
              .mockImplementation((user: UserDto) =>
                Promise.resolve({ id: 'a uuid', ...user }),
              ),
            deleteUser: jest.fn().mockResolvedValue({ deleted: true }),
          }
        }
      ]
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getUsers', () => {
    it('should get an array of users', async () => {
      await expect(controller.getUsers()).resolves.toEqual([
        {
          username: 'testUser1',
          email: 'testEmail1',
          is_admin: true,
        },
        {
          username: 'testUser2',
          email: 'testEmail2',
          is_admin: true,
        },
        {
          username: 'testUser3',
          email: 'testEmail3',
          is_admin: true,
        },
      ]);
    });
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const newUserDTO: UserDto = {
        username: 'testUser1',
        email: 'testEmail1',
        is_admin: true,
        organization_api_id: '12345'
      };
      await expect(controller.createUser(newUserDTO)).resolves.toEqual({
        id: 'a uuid',
        ...newUserDTO,
      });
    });
  });
  
  describe('deleteUser', () => {
    it('should return that it deleted a user', async () => {
      await expect(controller.deleteUser('a uuid that exists')).resolves.toEqual(
        {
          deleted: true,
        },
      );
    });

    //TODO: fix error for mockResolvedValueOnce parameter
    // it('should return that it did not delete a user', async () => {
    //   const deleteSpy = jest
    //     .spyOn(service, 'deleteUser')
    //     .mockResolvedValueOnce({ deleted: false });
    //   await expect(
    //     controller.deleteUser('a uuid that does not exist'),
    //   ).resolves.toEqual({ deleted: false });
    //   expect(deleteSpy).toBeCalledWith('a uuid that does not exist');
    // });
  });

});
