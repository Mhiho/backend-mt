import { DataSource } from 'typeorm';
import { databaseConfig } from '../config/database.configuration';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: databaseConfig.host,
                port: databaseConfig.port,
                username: databaseConfig.username,
                password: databaseConfig.password,
                entities: databaseConfig.entities,
                synchronize: databaseConfig.synchronize,
            });

            return dataSource.initialize();
        },
    },
];
