export interface ITile {
    occupyingMarble ?: IMarble;
    type : TileType;
    nextTile: ITile;
}

export enum TileType {
    "MIDDLE", "CORNER", "START", "HOME", "GOAL"
}

export interface IMarble {
    isHome: boolean;
    isInGoal: boolean;
    userId: string;
}