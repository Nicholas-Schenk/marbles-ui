export interface ITile {
    index: number[]
    id?: string;
    color: TileColor;
    borderColor?: TileColor; 
    occupyingMarble ?: IMarble;
    type : TileType;
    nextTileDirection ?: Record<string, TileDirection>, 
    nextTile?: Record<string, ITile[]>;
}

export enum TileDirection {
    "ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"
}

export enum TileColor {
    "blue", "red", "yellow", "green", "gray", "black", "white", "lightblue", "lightgreen", "lightcoral", "goldenrod"
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
    die1: Die
    die2: Die
}

export interface Die {
    value: number;
    remainingValue: number;
}


// Define the TS type for the counter slice's state
export interface BoardState {
  board: ITile[][]
  selectedTile?: ITile
  turn: {
    dice?: Dice,
    selectedDie ?: "1" | "2";
    canRollDice: boolean;
    userId: string
  }
}