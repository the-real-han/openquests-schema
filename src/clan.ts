
export type ClanId = string;

export interface Clan {
    id: ClanId;
    name: string;
    description: string;
    wood: number;
    food: number;
    gold: number;
}
