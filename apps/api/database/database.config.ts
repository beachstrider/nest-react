import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'

const configService = new ConfigService()

@Injectable()
export class Config implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['dist/src/**/*.entity.js'],
      migrations: ['dist/database/migrations/*.js'],
      synchronize: true,
      autoLoadEntities: true
    }
  }
}
