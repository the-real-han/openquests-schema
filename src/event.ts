export type WorldEventType =
    | "WEATHER"
    | "INVASION"
    | "BLESSING"
    | "CURSE"
    | "BOSS_APPEAR"
    | "BOSS_DEFEATED"
    | "BOSS_FAILED";

export interface WorldEvent {
    id: string
    type: WorldEventType
    day: number
    locationId?: string
    clanId?: string
    data?: Record<string, any>
}