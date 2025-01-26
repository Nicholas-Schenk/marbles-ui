"use client"
import { initState } from './initialBoard'
import { BoardState, Dice, ITile, TileType } from '@/types/interfaces'
import { atom } from 'jotai'



export const boardAtom = atom<BoardState>(initState)

export const setBoardAtom = atom(
  (get) => get(boardAtom),
  (get, set, arg: ITile[][]) => set(boardAtom, {...get(boardAtom), board: arg})
)

export const rollDiceAtom = atom(
  (get) => get(boardAtom).turn.dice,
  (get, set) => {
    const state = {...get(boardAtom)}
    const rand1 = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    const rand2 = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    if(state.turn.dice && state.turn.dice.die1.value !== state.turn.dice.die2.value){
      if(state.turn.dice?.die1.value === 6){
        state.turn.dice = {...state.turn.dice, die1: {value: rand1, remainingValue: rand1}}
      } else if(state.turn.dice?.die2.value === 6){
        state.turn.dice = {...state.turn.dice, die2: {value: rand2, remainingValue: rand2}}
      } 
    } else {
      state.turn.dice = {die1: {value: rand1, remainingValue: rand1}, die2 : {value: rand2, remainingValue: rand2}}
    }

    set(boardAtom, {...get(boardAtom), turn: {...state.turn, canRollDice: state.turn.dice.die1 === state.turn.dice.die2 || state.turn.dice.die1.value === 6 || state.turn.dice.die2.value === 6, dice: state.turn.dice}})
  }
)

export const selectedDieAtom = atom(
  (get) => get(boardAtom).turn.selectedDie,
  (get, set, arg?: "1" | "2" ) => {
    const state = {...get(boardAtom)}

    set(boardAtom, {...state, turn: {...state.turn, selectedDie: arg}})
  }
)

export const changeTurnAtom = atom(
  (get) => get(boardAtom).turn,
  (get, set) => {
    const board = {...get(boardAtom)}

    set(boardAtom, {...board, selectedTile: undefined, turn: {canRollDice: true, userId: board.turn.userId === "4" ? "1" : String(Number(board.turn.userId) + 1)} })
    
  }
)


export const setSelectedTileAtom = atom(
  (get) => get(boardAtom).selectedTile,
  (get, set, arg?: ITile) => {
    set(boardAtom, {...get(boardAtom), selectedTile : arg})
  }
)


export const moveMarbleAtom = atom(
  (get) => get(boardAtom).selectedTile?.occupyingMarble,
  (get, set, arg: {currentTile: ITile, userId: string, nextTileIndex: number}) => {
    const boardCopy = [...get(boardAtom).board]

    const currentTileCopy = {...arg.currentTile}
    const nextTile = {...arg.currentTile.nextTile}[arg.userId][arg.nextTileIndex]


    const turn = get(boardAtom).turn
    let dice: Dice | undefined = turn.dice
    if(turn.selectedDie === "1" && dice?.die1.remainingValue){
      if(nextTile.type === TileType.START){
        dice.die1.remainingValue = 0
      } else {
        dice.die1.remainingValue = dice.die1.remainingValue - 1
      }
    } else if(turn.selectedDie === "2" && dice?.die2.remainingValue){
      if(nextTile.type === TileType.START){
        dice.die2.remainingValue = 0
      } else {
        dice.die2.remainingValue = dice.die2.remainingValue - 1
      }
    }
    
    
    //must be fully in goal
    if(!nextTile){

    }
    
    nextTile.occupyingMarble = currentTileCopy.occupyingMarble;
    currentTileCopy.occupyingMarble = undefined;

    //marble left home
    if(currentTileCopy.type === TileType.HOME && nextTile.occupyingMarble){
      nextTile.occupyingMarble.isHome = false
    } else if(nextTile){

    }

    boardCopy[currentTileCopy.index[1]][currentTileCopy.index[0]] = currentTileCopy;
    boardCopy[nextTile.index[1]][nextTile.index[0]] = nextTile

    set(boardAtom, {...get(boardAtom), selectedTile: nextTile, board : boardCopy})
  }
)
