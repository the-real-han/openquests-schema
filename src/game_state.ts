import { ActiveBoss } from './boss';
import { Clan, ClanId } from './clan';
import { WorldEvent } from './event';
import { LocationId, LocationState, LocationModifier } from './location';
import { Player } from './player';
import { WorldHistory } from './world_log';

// The minimal state required to persist the world
export interface GameState {
    day: number;
    locations: Record<LocationId, LocationState>;
    players: Record<string, Player>;
    clans: Record<ClanId, Clan>;
    activeEvents: WorldEvent[]
    activeBoss?: ActiveBoss | null
    activeModifiers?: LocationModifier[]
    history: WorldHistory[]
}

// Result of a processed daily tick
export interface TickResult {
    newState: GameState;
    narrativeSummary: string;
}
