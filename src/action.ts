export interface Action {
    playerId: string;
    type: ActionType;
    target?: string; // e.g., "forest", "goblin"
}

export const ACTIONS = ['GATHER', 'EXPLORE', 'ATTACK', 'WAIT'] as const;
export type ActionType = typeof ACTIONS[number];

