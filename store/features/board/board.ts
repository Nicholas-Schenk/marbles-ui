"use client"
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initState } from './initialBoard'
import { BoardState, Dice, ITile } from '@/types/interfaces'
import { atom } from 'jotai'



export const boardAtom = atom<BoardState>(initState)

export const setBoardAtom = atom(
  (get) => get(boardAtom),
  (get, set, arg: ITile[][]) => set(boardAtom, {...get(boardAtom), board: arg})
)

export const rollDiceAtom = atom(
  (get) => get(boardAtom).dice,
  (get, set, arg: boolean) => {
    const state = {...get(boardAtom)}
    if(arg && state.dice.die1 !== state.dice.die2){
      if(state.dice.die1 === 6){
        state.dice = {...state.dice, die1: state.dice.die1 = Math.floor(Math.random() * (6 - 1 + 1) + 1)}
      } else if(state.dice.die2 === 6){
        state.dice = {...state.dice, die2: Math.floor(Math.random() * (6 - 1 + 1) + 1)}
      }
    } else {
      state.dice = {die1: Math.floor(Math.random() * (6 - 1 + 1) + 1), die2 : Math.floor(Math.random() * (6 - 1 + 1) + 1)}
    }
    set(boardAtom, {...get(boardAtom), dice: state.dice})
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
    
    nextTile.occupyingMarble = currentTileCopy.occupyingMarble;
    currentTileCopy.occupyingMarble = undefined;

    boardCopy[currentTileCopy.index[0]][currentTileCopy.index[1]] = currentTileCopy;
    boardCopy[nextTile.index[0]][nextTile.index[1]] = nextTile

    set(boardAtom, {...get(boardAtom), board : boardCopy})
  }
)
