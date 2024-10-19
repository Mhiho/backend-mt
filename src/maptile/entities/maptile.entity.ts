import { Race } from 'src/user/dto/create.user.dto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { MapTerrainEnum, Terrain } from '../enums.maptile';

@Entity()
export class Maptile {
    @PrimaryGeneratedColumn({ type: 'integer' })
    id: number;

    @Column({ type: 'enum', enum: Race, nullable: true })
    race: Terrain;

    @Column({ type: 'enum', enum: MapTerrainEnum, default: MapTerrainEnum.NEUTRAL })
    owned: MapTerrainEnum;

    @Column()
    positionx: number;

    @Column()
    positiony: number;

    @Column({ type: 'enum', enum: Terrain })
    terraintype: Terrain;

    @Column({ default: 0 })
    foodfeed: number;

    @Column({ default: 0 })
    ironfeed: number;

    @Column({ default: 0 })
    stonefeed: number;

    @Column({ default: 0 })
    woodfeed: number;

    @Column({ default: 0 })
    silverfeed: number;

    @Column({ default: 0 })
    crystalfeed: number;

    @Column({ default: 50 })
    foodstart: number;

    @Column({ default: 10 })
    ironstart: number;

    @Column({ default: 15 })
    stonestart: number;

    @Column({ default: 50 })
    woodstart: number;

    @Column({ default: 3 })
    silverstart: number;

    @Column({ default: 0 })
    crystalstart: number;

    @Column({ default: 0 })
    foodbonus: number;

    @Column({ default: 0 })
    ironbonus: number;

    @Column({ default: 0 })
    stonebonus: number;

    @Column({ default: 0 })
    woodbonus: number;

    @Column({ default: 0 })
    silverbonus: number;

    @Column({ default: 0 })
    magicbonus: number;

    @Column({ default: 0 })
    soldierloris: number;

    @Column({ default: 0 })
    scoutloris: number;

    @Column({ default: 0 })
    grifloris: number;

    @Column({ default: 0 })
    magicianloris: number;

    @Column({ default: 0 })
    ramloris: number;

    @Column({ default: 0 })
    settlerloris: number;

    @Column({ default: 0 })
    walkirialoris: number;

    @Column({ default: 0 })
    barracksloris: number;

    @Column({ default: false })
    witchHutloris: boolean;

    @Column({ default: false })
    altarloris: boolean;

    @Column({ default: 0 })
    general: number;

    @Column({ default: 0 })
    headquotersloris: number;

    @Column({ default: 0 })
    ironmine: number;

    @Column({ default: 0 })
    stonemine: number;

    @Column({ default: 0 })
    mill: number;

    @Column({ default: 0 })
    silvermine: number;

    @Column({ default: 0 })
    sawmill: number;

    @Column({ default: 0 })
    militiaibis: number;

    @Column({ default: 0 })
    knightibis: number;

    @Column({ default: 0 })
    balistaibis: number;

    @Column({ default: 0 })
    siegeTower: number;

    @Column({ default: 0 })
    spy: number;

    @Column({ default: 0 })
    mightyibis: number;

    @Column({ default: 0 })
    barracksibis: number;

    @Column({ default: false })
    altaribis: boolean;

    @Column({ default: 0 })
    workshopibis: number;

    @Column({ default: 0 })
    madwild: number;

    @Column({ default: 0 })
    blackguardwilds: number;

    @Column({ default: 0 })
    shaman: number;

    @Column({ default: 0 })
    gigantwild: number;

    @Column({ default: 0 })
    dragonwild: number;

    @Column({ default: 0 })
    barackswilds: number;

    @Column({ default: false })
    witchhutwilds: boolean;

    @Column({ default: 0 })
    gigantcavewilds: number;

    @Column({ default: false })
    dragoncavewilds: boolean;

    @Column({ default: 0 })
    ratcreatures: number;

    @Column({ default: 0 })
    wilddogcreatures: number;

    @Column({ default: 0 })
    serpentcreatures: number;

    @Column({ default: 0 })
    rhinocreatures: number;

    @Column({ default: 0 })
    dragoncreatures: number;

    @Column({ default: 0 })
    startgatherresources: number;

    @Column({ default: false })
    ancientartifact: boolean;
}
