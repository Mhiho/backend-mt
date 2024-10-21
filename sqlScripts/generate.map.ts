import { Terrain } from '../src/maptile/enums.maptile';
import { databaseConfig as config } from '../src/config/configuration';
import { Client } from 'pg';

export const generateMap = async () => {
    const setXY = 60;
    const mapLength = setXY * setXY;
    const dragonGen = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3,
    ];
    const connectionString = `${config.type}://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`;
    const client = new Client(connectionString);
    client.connect();
    const condition = await client.query('SELECT COUNT(*) FROM maptile');
    console.log(condition.rows[0].count);
    if (condition.rows[0].count == mapLength) {
        console.log('map already generated');
        return;
    }
    const count = setXY + 1;
    for (let i = 1; i < count; i++) {
        for (let j = 1; j < count; j++) {
            const terrainGen = [
                Terrain.FOREST,
                Terrain.FOREST,
                Terrain.FOREST,
                Terrain.FOREST,
                Terrain.FOREST,
                Terrain.FOREST,
                Terrain.STONE,
                Terrain.STONE,
                Terrain.SILVER,
                Terrain.SILVER,
                Terrain.CASTLE,
                Terrain.CASTLE,
                Terrain.FIELDS,
                Terrain.FIELDS,
                Terrain.FIELDS,
                Terrain.FIELDS,
                Terrain.GRASSLAND,
                Terrain.GRASSLAND,
                Terrain.GRASSLAND,
                Terrain.GRASSLAND,
                Terrain.GRASSLAND,
                Terrain.GRASSLAND,
                Terrain.GRASSLAND,
                Terrain.MAGICLAND,
            ];
            // eslint-disable-next-line prefer-const
            let terrainRand = Math.floor(Math.random() * terrainGen.length);
            // eslint-disable-next-line prefer-const
            let terrainType = terrainGen[terrainRand];
            await client.query(
                `INSERT INTO maptile (positionx , positiony, terraintype, startgatherresources) VALUES (${i}, ${j}, '${terrainType}', '${Date.now()}');`,
            );
            console.log(`row added with time: ${Date.now()}`);
        }
    }
    console.log('generate done');

    // PONIŻEJ DOPISAĆ LOGIKE DLA avaiblestartslot - czyli żeby userzy byli rozrzuceni po planszy odpowiednio
    // const availableSlots = await client.query(
    //     `SELECT positiony, positionx from maptile WHERE terraintype = 'grassland' OR terraintype = 'fields' OR terraintype = 'forest' `,
    // );
    // const filteredAvailableSlots = [];
    // for (let i = 1; i < count; i++) {
    //     if (
    //         Math.abs(availableSlots.rows[i].positionx) -
    //             Math.abs(availableSlots.rows[i + 1].positionx) >
    //         5
    //     )
    //         filteredAvailableSlots.push(availableSlots.rows[i], availableSlots.rows[i + 1]);
    // }
    // console.log(filteredAvailableSlots);
    // // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const doubleFiltered = [];
    // for (let i = 1; i < filteredAvailableSlots.length; i++) {
    //     if (
    //         Math.abs(filteredAvailableSlots[i].positiony) -
    //             Math.abs(filteredAvailableSlots[i + 1].positiony) >
    //         5 * setXY
    //     )
    //         doubleFiltered.push(filteredAvailableSlots[i]);
    // }
    await client.query(
        `UPDATE maptile SET avaiblestartslot = true WHERE terrainType = 'grassland' OR terrainType = 'forest' OR terrainType = 'fields'`,
    );
    console.log('tymczasowe avaiblestartslot = true gotowe');
    //a narazie jest tylko avaible slots
    // console.log(doubleFiltered);
    for (let i = 1; i < count; i++) {
        for (let j = 1; j < count; j++) {
            // dla uroczysk
            const wildDog = Math.floor(Math.random() * (31 - 1)) + 1;
            // let serpent = Math.floor(Math.random() * (21 - 1)) + 1;
            const serpent = Math.floor(Math.random() * (15 - 1)) + 1;
            // let lion = Math.floor(Math.random() * (11 - 1)) + 1;
            const rhino = Math.floor(Math.random() * (8 - 1)) + 1;
            //dla łąk
            const rat2 = Math.floor(Math.random() * 4);
            // let wildDog2 = Math.floor(Math.random() * 4);
            const wildDog2 = Math.floor(Math.random() * 3);
            const serpent2 = Math.floor(Math.random() * 2);
            const rhino2 = Math.floor(Math.random() * 1);
            //dla reszty
            const rat3 = Math.floor(Math.random() * 10);
            const wildDog3 = Math.floor(Math.random() * 8);
            const serpent3 = Math.floor(Math.random() * 8);
            // let lion3 = Math.floor(Math.random() * 6);
            const rhino3 = Math.floor(Math.random() * 4);
            // smoki w uroczyskach
            const random = Math.floor(Math.random() * dragonGen.length);
            const dragon = dragonGen[random];
            await client.query(
                `UPDATE maptile SET wilddogcreatures = '${wildDog}', serpentcreatures = '${serpent}', rhinocreatures = '${rhino}', dragoncreatures = '${dragon}' WHERE terrainType = 'magicland' AND positionx = ${i} AND positiony = ${j};`,
            );
            await client.query(
                `UPDATE maptile SET ratcreatures = '${rat2}', wildDogcreatures = '${wildDog2}', serpentcreatures = '${serpent2}', rhinocreatures = '${rhino2}' WHERE terrainType = 'grassland' AND positionx = ${i} AND positiony = ${j};`,
            );
            await client.query(
                `UPDATE maptile SET ratcreatures = '${rat3}', wildDogcreatures = '${wildDog3}', serpentcreatures = '${serpent3}', rhinocreatures = '${rhino3}' WHERE terrainType != 'grassland' AND terrainType != 'magicland' AND positionx = ${i} AND positiony = ${j};`,
            );
        }
    }
    console.log('update animals done');
    const dragonFull = await client.query(
        `Select id,dragoncreatures,ancientartifact from maptile where dragoncreatures >= 2`,
    );
    console.log(`possible slots for artifacts = '${dragonFull.rows.length}'`);
    const randomFive = [];
    for (let i = 0; i < 5; i++) {
        const strike = Math.floor(Math.random() * dragonFull.rows.length);
        randomFive.push(dragonFull.rows[strike]);
        dragonFull.rows.splice(strike, 1);
    }
    for (let i = 0; i < 5; i++) {
        await client.query(
            `UPDATE maptile SET ancientartifact = true WHERE id = '${randomFive[i].id}'`,
        );
    }
    console.log('artifacts added');

    for (let i = 1; i < count; i++) {
        for (let j = 1; j < count; j++) {
            const luck = Math.floor(Math.random() * (5 - 1) + 1);
            await client.query(
                `UPDATE maptile SET food = 50 *ROUND(ratcreatures+wilddogcreatures*1.5+serpentcreatures*2+rhinocreatures*3+dragoncreatures*30) WHERE positionx = ${i} AND positiony = ${j};`,
            );
            await client.query(
                `UPDATE maptile SET wood = 50 *ROUND(ratcreatures+wilddogcreatures*1.5+serpentcreatures*2+rhinocreatures*3+dragoncreatures*30) WHERE positionx = ${i} AND positiony = ${j};`,
            );
            await client.query(
                `UPDATE maptile SET iron = 25 *ROUND(ratcreatures+wilddogcreatures*1.5+serpentcreatures*2+rhinocreatures*3+dragoncreatures*30) WHERE positionx = ${i} AND positiony = ${j};`,
            );
            await client.query(
                `UPDATE maptile SET stone = 15 *ROUND(rhinocreatures*6+dragoncreatures*30) WHERE positionx = ${i} AND positiony = ${j};`,
            );
            await client.query(
                `UPDATE maptile SET silver = 10 *ROUND(rhinocreatures*3+dragoncreatures*10) WHERE positionx = ${i} AND positiony = ${j};`,
            );
            await client.query(
                `UPDATE maptile SET crystal = (crystal + ${luck}) *ROUND(dragoncreatures*2) WHERE terraintype = 'magicland' AND positionx = ${i} AND positiony = ${j};`,
            );
        }
    }
    //
    console.log('ressources update done');
    console.log('map ready');
    await client.end();
};
generateMap();
