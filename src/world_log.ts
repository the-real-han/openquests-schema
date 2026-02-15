import { LocationModifier } from "./location";

export interface WorldHistoryEntry {
    day: number;
    population: number

    bossEvents: {
        name: string
        location: string
        status: "APPEARED" | "DEFEATED" | "DISAPPEARED"
        message: string
    }[]

    locationEvents: {
        type: "WEATHER" | "INVASION" | "BLESSING" | "CURSE"
        location: string
        effects: LocationModifier["effects"]
        message: string
    }[]

    miscEvents?: {
        type: string
        location?: string
        message?: string
    }[]

    summary?: string;
    notes?: string[];
}