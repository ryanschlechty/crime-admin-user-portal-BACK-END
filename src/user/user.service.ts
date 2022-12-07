import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities';
import { Repository } from 'typeorm';
import { UserDto } from '../dtos/user.dtos';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
      ) {}

      getUsers() {
        return this.userRepository.find();
      }
    
      createUser(userDto: UserDto) {
        const newUser = this.userRepository.create(userDto);
        return this.userRepository.save(newUser);
      }

      deleteUser(id: number) {
        return this.userRepository.delete(id);
      }
}
