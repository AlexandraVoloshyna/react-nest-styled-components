import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './register.dto/register.dto';
import { LoginDto } from './login.dto/login.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    private jwtService: JwtService
  ) {}

  async register(registerDto: RegisterDto) {
    const dublicate = await this.usersRepository.findOne({
      where: { email: registerDto.email },
    });
    if (dublicate) {
      throw new BadRequestException('User already exist');
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(registerDto.password, salt);
    const user = await this.usersRepository.create({
      email: registerDto.email,
      password: hashedPassword,
    });
    const savedUser = await this.usersRepository.save(user);
    return {
      success: true,
      data: savedUser,
    };
  }
  
  async login(loginDto: LoginDto) {
    const user = await this.usersRepository.findOne({
      where: { email: loginDto.email },
    });
    if (!user) {
      throw new BadRequestException('Invalid email or password');
    }
    const passwordMatch = await bcrypt.compare(loginDto.password, user.password);
    if (!passwordMatch) {
       throw new BadRequestException('Invalid email or password');
    }
    const token =  await this.jwtService.signAsync({id: user.id})
    return {
      success: true,
      token
      
    };
  }
}
