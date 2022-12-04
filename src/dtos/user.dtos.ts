import { IsBoolean, IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class UserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  //@IsEmail()
  email: string;

  @IsNotEmpty()
  @IsBoolean()
  is_admin: boolean;
}