import { databaseConfig } from 'src/config/configuration';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: databaseConfig.host,
    port: databaseConfig.port,
    database: databaseConfig.database,
    username: databaseConfig.username,
    password: databaseConfig.password,
    entities: databaseConfig.entities,
    synchronize: databaseConfig.synchronize,
};

export const databaseProviders = [
    {
        provide: DataSource,
        useFactory: async () => {
            const dataSource = new DataSource(dataSourceOptions);
            try {
                if (!dataSource.isInitialized) {
                    await dataSource.initialize();
                }
            } catch (error) {
                console.log(error?.message);
            }
            return dataSource;
        },
    },
];
