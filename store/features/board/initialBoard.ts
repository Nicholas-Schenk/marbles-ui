
"use client"
import { BoardState, ITile, TileColor, TileDirection, TileType } from "../../../types/interfaces";

const ES: ITile = { index : [-1, -1], type: TileType.EMPTY_SPACE, color: TileColor.black}

const m: ITile = { index : [7, 7],id: "m", color: TileColor.gray, borderColor: TileColor.black, type: TileType.MIDDLE}


const sb: ITile = {index : [5, 0],id :"sb", color: TileColor.gray, borderColor: TileColor.lightblue, type: TileType.SPACE, nextTileDirection: {"1": TileDirection.ArrowRight, "2": TileDirection.ArrowRight, "3": TileDirection.ArrowRight, "4": TileDirection.ArrowRight}};

const b1: ITile = {index : [0, 0], id: "b1", color: TileColor.lightblue, occupyingMarble: { color: TileColor.blue,isHome: true, isInGoal: false, isFullyInGoal: false, id: "B1", userId: "1"}, type: TileType.HOME, nextTile: {"1": [sb]}}
const b2: ITile = {index : [0, 2],id: "b2", color: TileColor.lightblue, occupyingMarble: { color: TileColor.blue,isHome: true, isInGoal: false, isFullyInGoal: false, id: "B2", userId: "1"}, type: TileType.HOME, nextTile: {"1": [sb]}}
const b3: ITile = {index : [1, 1],id: "b3",color: TileColor.lightblue, occupyingMarble: { color: TileColor.blue,isHome: true, isInGoal: false, isFullyInGoal: false, id: "B3", userId: "1"}, type: TileType.HOME, nextTile: {"1": [sb]}}
const b4: ITile = {index : [2, 0],id: "b4",color: TileColor.lightblue, occupyingMarble: { color: TileColor.blue,isHome: true, isInGoal: false, isFullyInGoal: false, id: "B4", userId: "1"}, type: TileType.HOME, nextTile: {"1": [sb]}}
const b5: ITile = {index : [2, 2],id: "b5",color: TileColor.lightblue, occupyingMarble: { color: TileColor.blue,isHome: true, isInGoal: false, isFullyInGoal: false, id: "B5", userId: "1"}, type: TileType.HOME, nextTile: {"1": [sb]}}

const gb1: ITile = {index : [7, 5],id: "gb1",color: TileColor.lightblue, type: TileType.GOAL}
const gb2: ITile = {index : [7, 4],id: "gb2",color: TileColor.lightblue, type: TileType.GOAL, nextTile: {"1": [gb1]}, nextTileDirection: {"1": TileDirection.ArrowRight}}
const gb3: ITile = {index : [7, 3],id: "gb3",color: TileColor.lightblue, type: TileType.GOAL, nextTile: {"1": [gb2]}, nextTileDirection: {"1": TileDirection.ArrowRight}}
const gb4: ITile = {index : [7, 2],id: "gb4",color: TileColor.lightblue, type: TileType.GOAL, nextTile: {"1": [gb3]}, nextTileDirection: {"1": TileDirection.ArrowRight}}
const gb5: ITile = {index : [7, 1],id: "gb5",color: TileColor.lightblue, type: TileType.GOAL, nextTile: {"1": [gb4]}, nextTileDirection: {"1": TileDirection.ArrowRight}}



const sr: ITile = {index : [14, 5],id: "sr",color: TileColor.gray, borderColor: TileColor.lightcoral, type: TileType.START}

const r1: ITile = {index : [12, 0],id: "r1",color: TileColor.lightcoral, occupyingMarble: { color: TileColor.red,isHome: true, isInGoal: false, isFullyInGoal: false, id: "r1", userId: "4"}, type: TileType.HOME, nextTile: {"4": [sr]}}
const r2: ITile = {index : [12, 2],id: "r2",color: TileColor.lightcoral,occupyingMarble: { color: TileColor.red,isHome: true, isInGoal: false, isFullyInGoal: false, id: "r2", userId: "4"}, type: TileType.HOME, nextTile: {"4": [sr]}}
const r3: ITile = {index : [13, 1],id: "r3",color: TileColor.lightcoral,occupyingMarble: { color: TileColor.red,isHome: true, isInGoal: false, isFullyInGoal: false, id: "r3", userId: "4"}, type: TileType.HOME, nextTile: {"4": [sr]}}
const r4: ITile = {index : [14, 0],id: "r4",color: TileColor.lightcoral,occupyingMarble: { color: TileColor.red,isHome: true, isInGoal: false, isFullyInGoal: false, id: "r4", userId: "4"}, type: TileType.HOME, nextTile: {"4": [sr]}}
const r5: ITile = {index : [14, 2],id: "r5",color: TileColor.lightcoral,occupyingMarble: { color: TileColor.red,isHome: true, isInGoal: false, isFullyInGoal: false, id: "r5", userId: "4"}, type: TileType.HOME, nextTile: {"4": [sr]}}

const gr1: ITile = {index : [9, 7],id: "gr1",color: TileColor.lightcoral, type: TileType.GOAL}
const gr2: ITile = {index : [10, 7],id: "gr2",color: TileColor.lightcoral, type: TileType.GOAL, nextTile: {"4": [gr1]}, nextTileDirection: {"4": TileDirection.ArrowUp}}
const gr3: ITile = {index : [11, 7],id: "gr3",color: TileColor.lightcoral, type: TileType.GOAL, nextTile: {"4": [gr2]}, nextTileDirection: {"4": TileDirection.ArrowUp}}
const gr4: ITile = {index : [12, 7],id: "gr4",color: TileColor.lightcoral, type: TileType.GOAL, nextTile: {"4": [gr3]}, nextTileDirection: {"4": TileDirection.ArrowUp}}
const gr5: ITile = {index : [13, 7],id: "gr5",color: TileColor.lightcoral, type: TileType.GOAL, nextTile: {"4": [gr4]}, nextTileDirection: {"4": TileDirection.ArrowUp}}




const sg: ITile = {index : [0, 9],id: "sg",color: TileColor.gray, borderColor: TileColor.lightgreen, type: TileType.START}

const g1: ITile = {index : [0, 12],id: "g1",color: TileColor.lightgreen, occupyingMarble: { color: TileColor.green,isHome: true, isInGoal: false, isFullyInGoal: false, id: "g1", userId: "2"}, type: TileType.HOME, nextTile: {"2": [sg]}}
const g2: ITile = {index : [0, 14],id: "g2",color: TileColor.lightgreen,occupyingMarble: { color: TileColor.green,isHome: true, isInGoal: false, isFullyInGoal: false, id: "g2", userId: "2"}, type: TileType.HOME, nextTile: {"2": [sg]}}
const g3: ITile = {index : [1, 13],id: "g3",color: TileColor.lightgreen,occupyingMarble: { color: TileColor.green,isHome: true, isInGoal: false, isFullyInGoal: false, id: "g3", userId: "2"}, type: TileType.HOME, nextTile: {"2": [sg]}}
const g4: ITile = {index : [2, 12],id: "g4",color: TileColor.lightgreen,occupyingMarble: { color: TileColor.green,isHome: true, isInGoal: false, isFullyInGoal: false, id: "g4", userId: "2"}, type: TileType.HOME, nextTile: {"2": [sg]}}
const g5: ITile = {index : [2, 14],id: "g5",color: TileColor.lightgreen,occupyingMarble: { color: TileColor.green,isHome: true, isInGoal: false, isFullyInGoal: false, id: "g5", userId: "2"}, type: TileType.HOME, nextTile: {"2": [sg]}}

const gg1: ITile = {index : [5, 7],id: "gg1",color: TileColor.lightgreen, type: TileType.GOAL}
const gg2: ITile = {index : [4, 7],id: "gg2",color: TileColor.lightgreen, type: TileType.GOAL, nextTile: {"2": [gg1]}, nextTileDirection: {"2": TileDirection.ArrowDown}}
const gg3: ITile = {index : [3, 7],id: "gg3",color: TileColor.lightgreen, type: TileType.GOAL, nextTile: {"2": [gg2]}, nextTileDirection: {"2": TileDirection.ArrowDown}}
const gg4: ITile = {index : [2, 7],id: "gg4",color: TileColor.lightgreen, type: TileType.GOAL, nextTile: {"2": [gg3]}, nextTileDirection: {"2": TileDirection.ArrowDown}}
const gg5: ITile = {index : [1, 7],id: "gg5",color: TileColor.lightgreen, type: TileType.GOAL, nextTile: {"2": [gg4]}, nextTileDirection: {"2": TileDirection.ArrowDown}}



const sy: ITile = {index : [9, 14],id: "sy",color: TileColor.gray, borderColor: TileColor.goldenrod, type: TileType.START}

const y1: ITile = {index : [12, 12],id: "y1",color: TileColor.goldenrod, occupyingMarble: { color: TileColor.yellow,isHome: true, isInGoal: false, isFullyInGoal: false, id: "r1", userId: "3"}, type: TileType.HOME, nextTile: {"3": [sy]}}
const y2: ITile = {index : [12, 14],id: "y2",color: TileColor.goldenrod,occupyingMarble: { color: TileColor.yellow,isHome: true, isInGoal: false, isFullyInGoal: false, id: "r2", userId: "3"}, type: TileType.HOME, nextTile: {"3": [sy]}}
const y3: ITile = {index : [13, 13],id: "y3",color: TileColor.goldenrod,occupyingMarble: { color: TileColor.yellow,isHome: true, isInGoal: false, isFullyInGoal: false, id: "r3", userId: "3"}, type: TileType.HOME, nextTile: {"3": [sy]}}
const y4: ITile = {index : [14, 12],id: "y4",color: TileColor.goldenrod,occupyingMarble: { color: TileColor.yellow,isHome: true, isInGoal: false, isFullyInGoal: false, id: "r4", userId: "3"}, type: TileType.HOME, nextTile: {"3": [sy]}}
const y5: ITile = {index : [14, 14],id: "y5",color: TileColor.goldenrod,occupyingMarble: { color: TileColor.yellow,isHome: true, isInGoal: false, isFullyInGoal: false, id: "r5", userId: "3"}, type: TileType.HOME, nextTile: {"3": [sy]}}

const gy1: ITile = {index : [7, 9],id: "gy1",color: TileColor.goldenrod, type: TileType.GOAL}
const gy2: ITile = {index : [7, 10],id: "gy2",color: TileColor.goldenrod, type: TileType.GOAL, nextTile: {"3": [gy1]}, nextTileDirection: {"3": TileDirection.ArrowLeft}}
const gy3: ITile = {index : [7, 11],id: "gy3",color: TileColor.goldenrod, type: TileType.GOAL, nextTile: {"3": [gy2]}, nextTileDirection: {"3": TileDirection.ArrowLeft}}
const gy4: ITile = {index : [7, 12],id: "gy4",color: TileColor.goldenrod, type: TileType.GOAL, nextTile: {"3": [gy3]}, nextTileDirection: {"3": TileDirection.ArrowLeft}}
const gy5: ITile = {index : [7, 13],id: "gy5",color: TileColor.goldenrod, type: TileType.GOAL, nextTile: {"3": [gy4]}, nextTileDirection: {"3": TileDirection.ArrowLeft}}


const s1: ITile = {index : [14, 6],id :"1", color: TileColor.gray, type: TileType.SPACE};
const s52: ITile = {index : [14, 7],id: "52",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s1], "2":[s1], "3":[s1], "4": [gr5]}, nextTileDirection: {"1": TileDirection.ArrowLeft, "2": TileDirection.ArrowLeft, "3": TileDirection.ArrowLeft, "4": TileDirection.ArrowUp}}
const s51: ITile = {index : [14, 8],id: "51",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s52], "2":[s52], "3":[s52], "4": [s52]}, nextTileDirection: {"1": TileDirection.ArrowLeft, "2": TileDirection.ArrowLeft, "3": TileDirection.ArrowLeft, "4": TileDirection.ArrowLeft}}
const s50: ITile = {index : [14, 9],id: "50",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s51], "2":[s51], "3":[s51], "4": [s51]}, nextTileDirection: {"1": TileDirection.ArrowLeft, "2": TileDirection.ArrowLeft, "3": TileDirection.ArrowLeft, "4": TileDirection.ArrowLeft}}
const s49: ITile = {index : [13, 9],id: "49",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s50], "2":[s50], "3":[s50], "4": [s50]}, nextTileDirection: {"1": TileDirection.ArrowDown, "2": TileDirection.ArrowDown, "3": TileDirection.ArrowDown, "4": TileDirection.ArrowDown}}
const s48: ITile = {index : [12, 9],id: "48",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s49], "2":[s49], "3":[s49], "4": [s49]}, nextTileDirection: {"1": TileDirection.ArrowDown, "2": TileDirection.ArrowDown, "3": TileDirection.ArrowDown, "4": TileDirection.ArrowDown}}
const s47: ITile = {index : [11, 9],id: "47",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s48], "2":[s48], "3":[s48], "4": [s48]}, nextTileDirection: {"1": TileDirection.ArrowDown, "2": TileDirection.ArrowDown, "3": TileDirection.ArrowDown, "4": TileDirection.ArrowDown}}
const s46: ITile = {index : [10, 9],id: "46",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s47], "2":[s47], "3":[s47], "4": [s47]}, nextTileDirection: {"1": TileDirection.ArrowDown, "2": TileDirection.ArrowDown, "3": TileDirection.ArrowDown, "4": TileDirection.ArrowDown}}
const s45: ITile = {index : [9, 9],id: "45",color: TileColor.gray, type: TileType.SPACE}
const s44: ITile = {index : [9, 10],id: "44",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s45], "2":[s45], "3":[s45], "4": [s45]}, nextTileDirection: {"1": TileDirection.ArrowLeft, "2": TileDirection.ArrowLeft, "3": TileDirection.ArrowLeft, "4": TileDirection.ArrowLeft}}
const s43: ITile = {index : [9, 11],id: "43",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s44], "2":[s44], "3":[s44], "4": [s44]}, nextTileDirection: {"1": TileDirection.ArrowLeft, "2": TileDirection.ArrowLeft, "3": TileDirection.ArrowLeft, "4": TileDirection.ArrowLeft}}
const s42: ITile = {index : [9, 12],id: "42",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s43], "2":[s43], "3":[s43], "4": [s43]}, nextTileDirection: {"1": TileDirection.ArrowLeft, "2": TileDirection.ArrowLeft, "3": TileDirection.ArrowLeft, "4": TileDirection.ArrowLeft}}
const s41: ITile = {index : [9, 13],id: "41",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s42], "2":[s42], "3":[s42], "4": [s42]}, nextTileDirection: {"1": TileDirection.ArrowLeft, "2": TileDirection.ArrowLeft, "3": TileDirection.ArrowLeft, "4": TileDirection.ArrowLeft}}
const s40: ITile = {index : [8, 14],id: "40",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[sy], "2":[sy], "3":[sy], "4": [sy]}, nextTileDirection: {"1": TileDirection.ArrowDown, "2": TileDirection.ArrowDown, "3": TileDirection.ArrowDown, "4": TileDirection.ArrowDown}}
const s39: ITile = {index : [7, 14],id: "39",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s40], "2":[s40], "3":[gy5], "4": [s40]}, nextTileDirection: {"1": TileDirection.ArrowDown, "2": TileDirection.ArrowDown, "3": TileDirection.ArrowLeft, "4": TileDirection.ArrowDown}}
const s38: ITile = {index : [6, 14],id: "38",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s39], "2":[s39], "3":[s39], "4": [s39]}, nextTileDirection: {"1": TileDirection.ArrowDown, "2": TileDirection.ArrowDown, "3": TileDirection.ArrowDown, "4": TileDirection.ArrowDown}}
const s37: ITile = {index : [5, 14],id: "37",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s38], "2":[s38], "3":[s38], "4": [s38]}, nextTileDirection: {"1": TileDirection.ArrowDown, "2": TileDirection.ArrowDown, "3": TileDirection.ArrowDown, "4": TileDirection.ArrowDown}}
const s36: ITile = {index : [5, 13],id: "36",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s37], "2":[s37], "3":[s37], "4": [s37]}, nextTileDirection: {"1": TileDirection.ArrowRight, "2": TileDirection.ArrowRight, "3": TileDirection.ArrowRight, "4": TileDirection.ArrowRight}}
const s35: ITile = {index : [5, 12],id: "35",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s36], "2":[s36], "3":[s36], "4": [s36]}, nextTileDirection: {"1": TileDirection.ArrowRight, "2": TileDirection.ArrowRight, "3": TileDirection.ArrowRight, "4": TileDirection.ArrowRight}}
const s34: ITile = {index : [5, 11],id: "34",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s35], "2":[s35], "3":[s35], "4": [s35]}, nextTileDirection: {"1": TileDirection.ArrowRight, "2": TileDirection.ArrowRight, "3": TileDirection.ArrowRight, "4": TileDirection.ArrowRight}}
const s33: ITile = {index : [5, 10],id: "33",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s34], "2":[s34], "3":[s34], "4": [s34]}, nextTileDirection: {"1": TileDirection.ArrowRight, "2": TileDirection.ArrowRight, "3": TileDirection.ArrowRight, "4": TileDirection.ArrowRight}}
const s32: ITile = {index : [5, 9],id: "32",color: TileColor.gray, type: TileType.SPACE}
const s31: ITile = {index : [4, 9],id: "31",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s32], "2":[s32], "3":[s32], "4": [s32]}, nextTileDirection: {"1": TileDirection.ArrowDown, "2": TileDirection.ArrowDown, "3": TileDirection.ArrowDown, "4": TileDirection.ArrowDown}}
const s30: ITile = {index : [3, 9],id: "30",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s31], "2":[s31], "3":[s31], "4": [s31]}, nextTileDirection: {"1": TileDirection.ArrowDown, "2": TileDirection.ArrowDown, "3": TileDirection.ArrowDown, "4": TileDirection.ArrowDown}}
const s29: ITile = {index : [2, 9],id: "29",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s30], "2":[s30], "3":[s30], "4": [s30]}, nextTileDirection: {"1": TileDirection.ArrowDown, "2": TileDirection.ArrowDown, "3": TileDirection.ArrowDown, "4": TileDirection.ArrowDown}}
const s28: ITile = {index : [1, 9],id: "28",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s29], "2":[s29], "3":[s29], "4": [s29]}, nextTileDirection: {"1": TileDirection.ArrowDown, "2": TileDirection.ArrowDown, "3": TileDirection.ArrowDown, "4": TileDirection.ArrowDown}}
const s27: ITile = {index : [0, 8],id: "27",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[sg], "2":[sg], "3":[sg], "4": [sg]}, nextTileDirection: {"1": TileDirection.ArrowRight, "2": TileDirection.ArrowRight, "3": TileDirection.ArrowRight, "4": TileDirection.ArrowRight}}
const s26: ITile = {index : [0, 7],id: "26",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s27], "2":[gg5], "3":[s27], "4": [s27]}, nextTileDirection: {"1": TileDirection.ArrowRight, "2": TileDirection.ArrowDown, "3": TileDirection.ArrowRight, "4": TileDirection.ArrowRight}}
const s25: ITile = {index : [0, 6],id: "25",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s26], "2":[s26], "3":[s26], "4": [s26]}, nextTileDirection: {"1": TileDirection.ArrowRight, "2": TileDirection.ArrowRight, "3": TileDirection.ArrowRight, "4": TileDirection.ArrowRight}}
const s24: ITile = {index : [0, 5],id: "24",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s25], "2":[s25], "3":[s25], "4": [s25]}, nextTileDirection: {"1": TileDirection.ArrowRight, "2": TileDirection.ArrowRight, "3": TileDirection.ArrowRight, "4": TileDirection.ArrowRight}}
const s23: ITile = {index : [1, 5],id: "23",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s24], "2":[s24], "3":[s24], "4": [s24]}, nextTileDirection: {"1": TileDirection.ArrowUp, "2": TileDirection.ArrowUp, "3": TileDirection.ArrowUp, "4": TileDirection.ArrowUp}}
const s22: ITile = {index : [2, 5],id: "22",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s23], "2":[s23], "3":[s23], "4": [s23]}, nextTileDirection: {"1": TileDirection.ArrowUp, "2": TileDirection.ArrowUp, "3": TileDirection.ArrowUp, "4": TileDirection.ArrowUp}}
const s21: ITile = {index : [3, 5],id: "21",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s22], "2":[s22], "3":[s22], "4": [s22]}, nextTileDirection: {"1": TileDirection.ArrowUp, "2": TileDirection.ArrowUp, "3": TileDirection.ArrowUp, "4": TileDirection.ArrowUp}}
const s20: ITile = {index : [4, 5],id: "20",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s21], "2":[s21], "3":[s21], "4": [s21]}, nextTileDirection: {"1": TileDirection.ArrowUp, "2": TileDirection.ArrowUp, "3": TileDirection.ArrowUp, "4": TileDirection.ArrowUp}}
const s19: ITile = {index : [5, 5],id: "19",color: TileColor.gray, type: TileType.SPACE}
const s18: ITile = {index : [5, 4],id: "18",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s19], "2":[s19], "3":[s19], "4": [s19]}, nextTileDirection: {"1": TileDirection.ArrowRight, "2": TileDirection.ArrowRight, "3": TileDirection.ArrowRight, "4": TileDirection.ArrowRight}}
const s17: ITile = {index : [5, 3],id: "17",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s18], "2":[s18], "3":[s18], "4": [s18]}, nextTileDirection: {"1": TileDirection.ArrowRight, "2": TileDirection.ArrowRight, "3": TileDirection.ArrowRight, "4": TileDirection.ArrowRight}}
const s16: ITile = {index : [5, 2],id: "16",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s17], "2":[s17], "3":[s17], "4": [s17]}, nextTileDirection: {"1": TileDirection.ArrowRight, "2": TileDirection.ArrowRight, "3": TileDirection.ArrowRight, "4": TileDirection.ArrowRight}}
const s15: ITile = {index : [5, 1],id: "15",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s16], "2":[s16], "3":[s16], "4": [s16]}, nextTileDirection: {"1": TileDirection.ArrowRight, "2": TileDirection.ArrowRight, "3": TileDirection.ArrowRight, "4": TileDirection.ArrowRight}}
const s14: ITile = {index : [6, 0],id: "14",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[sb], "2":[sb], "3":[sb], "4": [sb]}, nextTileDirection: {"1": TileDirection.ArrowUp, "2": TileDirection.ArrowUp, "3": TileDirection.ArrowUp, "4": TileDirection.ArrowUp}}
const s13: ITile = {index : [7, 0],id: "13",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[gb5], "2":[s14], "3":[s14], "4": [s14]}, nextTileDirection: {"1": TileDirection.ArrowRight, "2": TileDirection.ArrowUp, "3": TileDirection.ArrowUp, "4": TileDirection.ArrowUp}}
const s12: ITile = {index : [8, 0],id: "12",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s13], "2":[s13], "3":[s13], "4": [s13]}, nextTileDirection: {"1": TileDirection.ArrowUp, "2": TileDirection.ArrowUp, "3": TileDirection.ArrowUp, "4": TileDirection.ArrowUp}}
const s11: ITile = {index : [9, 0],id: "11",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s12], "2":[s12], "3":[s12], "4": [s12]}, nextTileDirection: {"1": TileDirection.ArrowUp, "2": TileDirection.ArrowUp, "3": TileDirection.ArrowUp, "4": TileDirection.ArrowUp}}
const s10: ITile = {index : [9, 1],id: "10",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s11], "2":[s11], "3":[s11], "4": [s11]}, nextTileDirection: {"1": TileDirection.ArrowLeft, "2": TileDirection.ArrowLeft, "3": TileDirection.ArrowLeft, "4": TileDirection.ArrowLeft}}
const s9: ITile = {index : [9, 2],id: "9",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s10], "2":[s10], "3":[s10], "4": [s10]}, nextTileDirection: {"1": TileDirection.ArrowLeft, "2": TileDirection.ArrowLeft, "3": TileDirection.ArrowLeft, "4": TileDirection.ArrowLeft}}
const s8: ITile = {index : [9, 3],id: "8",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s9], "2":[s9], "3":[s9], "4": [s9]}, nextTileDirection: {"1": TileDirection.ArrowLeft, "2": TileDirection.ArrowLeft, "3": TileDirection.ArrowLeft, "4": TileDirection.ArrowLeft}}
const s7: ITile = {index : [9, 4],id: "7",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s8], "2":[s8], "3":[s8], "4": [s8]}, nextTileDirection: {"1": TileDirection.ArrowLeft, "2": TileDirection.ArrowLeft, "3": TileDirection.ArrowLeft, "4": TileDirection.ArrowLeft}}
const s6: ITile = {index : [9, 5],id: "6",color: TileColor.gray, type: TileType.SPACE}
const s5: ITile = {index : [10, 5],id: "5",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s6], "2":[s6], "3":[s6], "4": [s6]}, nextTileDirection: {"1": TileDirection.ArrowUp, "2": TileDirection.ArrowUp, "3": TileDirection.ArrowUp, "4": TileDirection.ArrowUp}}
const s4: ITile = {index : [11, 5],id: "4",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s5], "2":[s5], "3":[s5], "4": [s5]}, nextTileDirection: {"1": TileDirection.ArrowUp, "2": TileDirection.ArrowUp, "3": TileDirection.ArrowUp, "4": TileDirection.ArrowUp}}
const s3: ITile = {index : [12, 5],id: "3",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s4], "2":[s4], "3":[s4], "4": [s4]}, nextTileDirection: {"1": TileDirection.ArrowUp, "2": TileDirection.ArrowUp, "3": TileDirection.ArrowUp, "4": TileDirection.ArrowUp}}
const s2: ITile = {index : [13, 5],id: "2",color: TileColor.gray, type: TileType.SPACE, nextTile: {"1":[s3], "2":[s3], "3":[s3], "4": [s3]}, nextTileDirection: {"1": TileDirection.ArrowUp, "2": TileDirection.ArrowUp, "3": TileDirection.ArrowUp, "4": TileDirection.ArrowUp}}
s1.nextTile = {"1":[sr], "2":[sr], "3":[sr], "4": [sr]}
s1.nextTileDirection = {"1": TileDirection.ArrowLeft, "2": TileDirection.ArrowLeft, "3": TileDirection.ArrowLeft, "4": TileDirection.ArrowLeft}

sb.nextTile= {"1": [s15], "2": [s15], "3": [s15], "4": [s15]}
sb.nextTileDirection= {"1": TileDirection.ArrowRight, "2": TileDirection.ArrowRight, "3": TileDirection.ArrowRight, "4": TileDirection.ArrowRight}

sr.nextTile= {"1": [s2], "2": [s2], "3": [s2], "4": [s2]}
sr.nextTileDirection= {"1": TileDirection.ArrowUp, "2": TileDirection.ArrowUp, "3": TileDirection.ArrowUp, "4": TileDirection.ArrowUp}

sg.nextTile={"1": [s28], "2": [s28], "3": [s28], "4": [s28]}
sg.nextTileDirection= {"1": TileDirection.ArrowDown, "2": TileDirection.ArrowDown, "3": TileDirection.ArrowDown, "4": TileDirection.ArrowDown}

sy.nextTile={"1": [s41], "2": [s41], "3": [s41], "4": [s41]}
sy.nextTileDirection= {"1": TileDirection.ArrowLeft, "2": TileDirection.ArrowLeft, "3": TileDirection.ArrowLeft, "4": TileDirection.ArrowLeft}

m.nextTile={"1": [s6], "2": [s19], "3": [s32], "4": [s45]}


s19.nextTile = {"1":[s20, m, s6], "2":[s20], "3":[s20], "4": [s20]}
s19.nextTileDirection= {"1": TileDirection.ArrowUp, "2": TileDirection.ArrowUp, "3": TileDirection.ArrowUp, "4": TileDirection.ArrowUp}

s32.nextTile = {"1":[s33], "2":[s33, m, s19], "3":[s33], "4": [s33]}
s32.nextTileDirection= {"1": TileDirection.ArrowRight, "2": TileDirection.ArrowRight, "3": TileDirection.ArrowRight, "4": TileDirection.ArrowRight}

s45.nextTile = {"1":[s46], "2":[s46], "3":[s46, m, s32], "4": [s46]}
s45.nextTileDirection= {"1": TileDirection.ArrowDown, "2": TileDirection.ArrowDown, "3": TileDirection.ArrowDown, "4": TileDirection.ArrowDown}

s6.nextTile = {"1":[s7], "2":[s7], "3":[s7], "4": [s7, m, s45]}
s6.nextTileDirection= {"1": TileDirection.ArrowLeft, "2": TileDirection.ArrowLeft, "3": TileDirection.ArrowLeft, "4": TileDirection.ArrowLeft}





export const initialBoard: ITile[][] = [
        [b1,  ES,  b2,  ES,  ES,  sb,  s14, s13, s12, s11, ES,  ES,  r1, ES,  r2],
        [ES,  b3,  ES,  ES,  ES,  s15, ES,  gb5, ES,  s10, ES,  ES,  ES,  r3, ES],
        [b4,  ES,  b5,  ES,  ES,  s16, ES,  gb4, ES,  s9,  ES,  ES,  r4, ES,  r5],
        [ES,  ES,  ES,  ES,  ES,  s17, ES,  gb3, ES,  s8,  ES,  ES,  ES,  ES,  ES],
        [ES,  ES,  ES,  ES,  ES,  s18, ES,  gb2, ES,  s7,  ES,  ES,  ES,  ES,  ES],
        [s24, s23, s22, s21, s20, s19, ES,  gb1, ES,  s6,  s5,  s4,  s3,  s2,  sr],
        [s25, ES,  ES,  ES,  ES,  ES,  ES,  ES,  ES,  ES,  ES,  ES,  ES,  ES,  s1],
        [s26, gg5, gg4, gg3, gg2, gg1, ES,  m,   ES,  gr1, gr2, gr3, gr4, gr5, s52],
        [s27, ES,  ES,  ES,  ES,  ES,  ES,  ES,  ES,  ES,  ES,  ES,  ES,  ES,  s51],
        [sg,  s28, s29, s30, s31, s32, ES,  gy1, ES,  s45, s46, s47,  s48,  s49,  s50],
        [ES,  ES,  ES,  ES,  ES,  s33, ES,  gy2, ES,  s44, ES,  ES,  ES,  ES,  ES],
        [ES,  ES,  ES,  ES,  ES,  s34, ES,  gy3, ES,  s43, ES,  ES,  ES,  ES,  ES],
        [g1,  ES,  g2,  ES,  ES,  s35, ES,  gy4, ES,  s42, ES,  ES,  y1, ES,  y2],
        [ES,  g3,  ES,  ES,  ES,  s36, ES,  gy5, ES,  s41, ES,  ES,  ES,  y3, ES],
        [g4,  ES,  g5,  ES,  ES,  s37, s38, s39, s40, sy,  ES,  ES,  y4, ES,  y5],
]


export const initState : BoardState= {
    board: initialBoard,
    turn: {
        userId: "1",
        canRollDice: true
    }
}