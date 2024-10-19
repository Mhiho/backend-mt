import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailModule } from './mail/mail.module';
import { MaptileModule } from './maptile/maptile.module';
import { dataSourceOptions } from 'data-source';
import { DatabaseModule } from './database/database.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        AuthModule,
        UserModule,
        MailModule,
        MaptileModule,
        DatabaseModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private dataSource: DataSource) {}
}
