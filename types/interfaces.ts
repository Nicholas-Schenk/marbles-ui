export interface ITile {
    index: number[]
    id?: string;
    color: TileColor;
    borderColor?: TileColor; 
    occupyingMarble ?: IMarble;
    type : TileType;
    nextTile?: Record<string, ITile[]>;
}

export enum TileColor {
    "blue", "red", "yellow", "green", "gray", "black", "white", "light blue"
}

export enum TileType {
    "MIDDLE", "CORNER", "START", "HOME", "GOAL", "EMPTY_SPACE", "SPACE"
}

export interface IMarble {
    color: TileColor;
    isHome: boolean;
    isInGoal: boolean;
    isFullyInGoal: boolean;
    id: string;
    userId: string;
}

export interface Dice {
    die1: number
    die2: number
}


// Define the TS type for the counter slice's state
export interface BoardState {
  board: ITile[][]
  selectedTile?: ITile
  dice: Dice
}