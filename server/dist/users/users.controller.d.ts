import { UsersService } from './users.service';
import { LoginDto } from './login.dto/login.dto';
import { RegisterDto } from './register.dto/register.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(registerDto: RegisterDto): Promise<{
        success: boolean;
        data: import("./users.entity").Users;
        message: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        success: boolean;
        token: string;
        message: string;
    }>;
}
