import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserDto } from '../dtos/user.dtos';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createUsers(@Body() userDto: UserDto) {
    return this.userService.createUser(userDto);
  }

  // @Get('id/:id')
  // findUsersById(@Param('id', ParseIntPipe) id: number) {
  //   return this.userService.findUsersById(id);
  // }
}
