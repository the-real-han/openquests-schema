export interface Action {
    playerId: string;
    type: 'GATHER' | 'EXPLORE' | 'ATTACK' | 'WAIT';
    target?: string; // e.g., "forest", "goblin"
}
