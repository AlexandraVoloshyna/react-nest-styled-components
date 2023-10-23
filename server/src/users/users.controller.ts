import { Controller, Post, Body, HttpStatus, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginDto } from './login.dto/login.dto';
import { RegisterDto } from './register.dto/register.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() registerDto: RegisterDto) {
    const user = await this.usersService.register(registerDto);
    
    return {
      success: true,
      data: user.data,
      message: 'User created successfully',
    };
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  async login(
    @Body()
    loginDto: LoginDto,
  ) {
    const data = await this.usersService.login(loginDto);
    return {
      success: true,
      token: data.token,
      message: 'User login successfully',
    };
  }
}
