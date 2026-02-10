import { ActionType } from "./action";
import { ClanId } from "./clan";

export const PLAYER_NAME_MAX_LENGTH = 15;
export const PLAYER_NAME_MIN_LENGTH = 3;
export const PLAYER_BACKSTORY_MAX_LENGTH = 200;

export const PLAYER_CLASSES = [
    'Warrior',
    'Lancer',
    'Archer',
    'Monk',
    'Adventurer'
] as const;

export type PlayerClass = typeof PLAYER_CLASSES[number];

export type Title = {
    id: string,
    title: string,
    requirement: {
        field: string,
        operator: string,
        value: number
    },
    bonus: {
        food: number,
        wood: number,
        gold: number,
        xp: number,
        fortune: number
    },
    rank: number,
    color: string
}

export interface PlayerLog {
    day: number;
    action?: {
        type: ActionType;
        target: string;
    },
    summary: string;
}


// A player in the system
export interface Player {
    playerId: number; // Issue Number
    github: {
        username: string;
        issueNumber: number;
        userId: number;
    };
    character: {
        name: string;
        class: PlayerClass;
        level: number;
        xp: number;
        clanId: ClanId;
        titles: string[];
        backstory: string;
    };
    message: string;
    history: PlayerLog[],
    meta: {
        joinedDay: number;
        lastActionDay: number;
        gatherFoodCount: number;
        gatherWoodCount: number;
        gatherGoldCount: number;
        food: number;
        wood: number;
        gold: number;
        exploreCount: number;
        attackCount: number;
        playerWins: number;
        playerLosses: number;
        monsterKilled: number;
        bossKilled: number;
        monsterEncountered: number;
        attackWinStreak: number;
        attackLoseStreak: number;
        attackedCount: number;
    };
}
