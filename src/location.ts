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

export type LocationModifier = {
    id: string
    type: "WEATHER" | "INVASION" | "BLESSING" | "CURSE"
    locationId: string
    startedOn: number

    effects: {
        explore?: number        // flat modifier
        gather?: {
            food?: number
            wood?: number
            gold?: number
        }
        fortune?: number        // dice modifier
        clanResourceLossPct?: {
            food?: number
            wood?: number
            gold?: number
        }
    }

    messages: string[]
}
