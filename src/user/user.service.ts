import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities';
import { Repository } from 'typeorm';
import { UserDto } from './dtos/user.dtos';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
      ) {}
    
    //   createUser(createUserDto: CreateUserDto) {
    //     const newUser = this.userRepository.create(createUserDto);
    //     return this.userRepository.save(newUser);
    //   }
    
      getUsers() {
        return this.userRepository.find();
      }
    
    //   findUsersById(id: number) {
    //     return this.userRepository.findOne(id);
    //   }
}
