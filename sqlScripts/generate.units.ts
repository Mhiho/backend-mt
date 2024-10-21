import { databaseConfig as config } from '../src/config/configuration';
import { Client } from 'pg';

const lorisArmy =
    'INSERT INTO lori(' +
    'name, attack, attackvsbuilding, defense, attackbonus, defensebonus, carry, mana, hitpoints, exp)' +
    'VALUES ' +
    "('hern',10,1,10,0,0,10,0,20,10)," +
    "('grifloris',35,5,18,0,0,30,15,35,35)," +
    "('magicloris',30,3,9,0,0,10,50,18,32)," +
    "('ramloris',3,30,8,0,0,0,0,50,25)," +
    "('scoutloris',10,0,10,0,0,20,0,25,10)," +
    "('walkirialoris',150,10,135,0,0,150,250,200,250);";

const ibisArmy =
    'INSERT INTO ibi(' +
    'name, attack, attackvsbuilding, defense, attackbonus, defensebonus, carry, mana, hitpoints, exp)' +
    'VALUES ' +
    "('militia',3,0,3,0,0,5,20,20,0)," +
    // "('soldier',7,3,8,8,8,2,10,20,7)," +
    // "('archer',12,0,5,6,4,2,10,20,7)," +
    "('palladin',25,4,28,0,0,40,35,35,32)," +
    "('siegeTower',3,35,10,0,0,0,0,55,45)," +
    "('balista',30,3,35,0,0,45,0,35,65)," +
    "('spy',20,0,20,0,0,15,0,25,25)," +
    "('mighty',155,10,145,0,0,200,190,220,0);";

const wildArmy =
    'INSERT INTO wild(' +
    'name, attack, attackvsbuilding, defense, attackbonus, defensebonus, carry, mana, hitpoints, exp)' +
    'VALUES ' +
    "('maddog',12,0,10,0,0,20,0,20,10)," +
    "('shaman',20,0,12,0,0,20,35,22,25)," +
    "('blackguardwilds',20,4,20,0,0,25,10,30,30)," +
    "('wildGigant',38,40,30,5,2,60,0,48,40)," +
    "('blindEye',5,0,5,0,0,15,60,25,10)," +
    "('dragonWild',200,60,175,10,5,30,300,200,250);";

const connectionString = `${config.type}://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`;
const client = new Client(connectionString);
client.connect();
const generateUnits = async () => {
    await client.query(lorisArmy);
    await client.query(ibisArmy);
    await client.query(wildArmy);
    client.end();
};
generateUnits();
