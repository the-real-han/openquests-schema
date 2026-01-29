import { ClanId } from "./clan";

export type LocationId = string;
export type LocationName = string; // Alias

export interface LocationState {
    id: LocationId;
    clanId: ClanId;
    description: string;
}

export interface LocationLog {
    day: number;
    summary: string;
    population: number;
    notes?: string[];
}
