import { ActiveBoss } from './boss';
import { Clan, ClanId } from './clan';
import { WorldEvent } from './event';
import { LocationId, LocationState, LocationLog } from './location';
import { Player } from './player';
import { WorldLog } from './world_log';

// The minimal state required to persist the world
export interface GameState {
    day: number;
    locations: Record<LocationId, LocationState>;
    players: Record<string, Player>;
    worldLog: WorldLog;
    locationLogs: Record<LocationId, LocationLog>;
    clans: Record<ClanId, Clan>;
    worldEvents: WorldEvent[]
    activeBoss?: ActiveBoss | null
}

// Result of a processed daily tick
export interface TickResult {
    newState: GameState;
    narrativeSummary: string;
}
