import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [TypeOrmModule.forFeature([Users]),
            JwtModule.registerAsync({
              imports: [ConfigModule], 
              useFactory: (configService: ConfigService) => ({
                secret: configService.get('secret'),
                signOptions: { expiresIn: '1h' },
              }),
              inject: [ConfigService], 
            }),      
          
  ],
  controllers: [UsersController],
  providers: [UsersService],
  
})
export class UsersModule {}
