import { EnvsConfig } from 'src/infra/config/envs.config';
import { DataSource } from 'typeorm';
import { Address } from './entities/address.entity';
import { Phone } from './entities/phone.entity';
import { Type } from './entities/type.entity';
import { User } from './entities/user.entity'

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: EnvsConfig.getHostDatabase(),
        port: EnvsConfig.getPortDatabase(),
        username: EnvsConfig.getUserDatabase(),
        password: EnvsConfig.getPasswordDatabase(),
        database: EnvsConfig.getSchemaDatabase(),
        entities: [
          User,
          Address,
          Phone,
          Type
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

