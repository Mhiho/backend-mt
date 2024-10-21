// import { User } from 'src/user/user.entity';
import { databaseConfig as config } from '../src/config/configuration';
import { Client } from 'pg';

const initUser = async () => {
    const connectionString = `${config.type}://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`;
    const client = new Client(connectionString);
    client.connect();
    const availableSlots = await client.query(
        `SELECT * FROM maptile WHERE avaiblestartslot = true`,
    );
    console.log(availableSlots.rows[1000]);
    client.end();
};

initUser();
