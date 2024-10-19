import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import * as fs from 'fs';

async function bootstrap() {
    // const keyFile = fs.readFileSync('./src/ssl/cert.key');
    // const pemFile = fs.readFileSync('./src/ssl/cert.pem');
    const app = await NestFactory.create(
        AppModule,
        //     {
        //     httpsOptions: { key: keyFile, cert: pemFile },
        // }
    );
    await app.listen(3000);
}
bootstrap();
