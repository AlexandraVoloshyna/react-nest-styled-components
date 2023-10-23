import { IsEmail, MinLength } from "class-validator";

export class RegisterDto {
  @IsEmail()
  email: string;
  @MinLength(8, {message: "Password must be longer than or equal to 8 characters"})
  password: string;
}
