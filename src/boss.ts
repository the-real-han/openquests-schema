export interface ActiveBoss {
    bossId: string
    locationId: string
    appearedOn: number
    expiresOn: number
    participants: number[] // playerIds
}
