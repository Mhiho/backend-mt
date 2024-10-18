import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { join } from 'path';
// import { ConfigService } from '@nestjs/config';
import { mailFrom, mailHost, mailPassword, mailUser } from 'src/config/configuration';

@Module({
    imports: [
        MailerModule.forRootAsync({
            // imports: [ConfigModule], // import module if not enabled globally
            useFactory: async () => ({
                // transport: config.get("MAIL_TRANSPORT"),
                // or
                transport: {
                    host: mailHost,
                    secure: true,
                    auth: {
                        user: mailUser,
                        pass: mailPassword,
                    },
                },
                defaults: {
                    from: `"No Reply" <${mailFrom}>`,
                },
                template: {
                    dir: join(__dirname, 'templates'),
                    adapter: new HandlebarsAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
        }),
    ],
    providers: [MailService],
    exports: [MailService],
})
export class MailModule {}
