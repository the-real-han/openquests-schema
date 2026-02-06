import { WorldEvent } from "./event";

export interface WorldLog {
    summary: string;
    population: number;
    notes?: string[];
}

export interface WorldHistory {
    day: number;
    events: WorldEvent[],
    log: WorldLog
}