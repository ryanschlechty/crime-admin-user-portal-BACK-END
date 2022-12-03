import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class OrganizationDto {
  @IsNotEmpty()
  name: string;
}