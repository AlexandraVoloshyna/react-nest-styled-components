import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { RegisterDto } from './register.dto/register.dto';
import { LoginDto } from './login.dto/login.dto';
export declare class UsersService {
    private readonly usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<Users>, jwtService: JwtService);
    register(registerDto: RegisterDto): Promise<{
        success: boolean;
        data: Users;
    }>;
    login(loginDto: LoginDto): Promise<{
        success: boolean;
        message: string;
        token?: undefined;
    } | {
        success: boolean;
        token: string;
        message?: undefined;
    }>;
}
