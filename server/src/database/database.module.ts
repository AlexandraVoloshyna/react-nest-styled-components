import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cards } from 'src/cards/cards.entity';
import { Users } from 'src/users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DB'),
        entities: [Users, Cards],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
