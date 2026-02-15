export type WorldEventType =
    | "WEATHER"
    | "INVASION"
    | "BLESSING"
    | "CURSE"
    | "BOSS_APPEARED"
    | "BOSS_DEFEATED"
    | "BOSS_DISAPPEARED";

export interface WorldEvent {
    id: string
    type: WorldEventType
    day: number
    location?: string
    data?: Record<string, any>
}