import { ClanId } from "./clan";

export type LocationId = string;
export type LocationName = string;

export interface LocationState {
    id: LocationId;
    name: LocationName;
    clanId: ClanId;
    description: string;
    history: LocationHistoryEntry[];
}

export interface LocationHistoryEntry {
    day: number
    population: number;
    location: string
    clan: string

    events: {
        type:
        | "LOCATION_EVENT"
        | "CLAN_DEFEATED"
        | "CLAN_CONQUERED"
        | "RESOURCE_SURGE"
        | "BOSS_APPEARED"
        | "BOSS_DEFEATED"
        | "BOSS_DISAPPEARED"
        data: Record<string, any>
        message?: string
    }[]

    summary?: string;
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
