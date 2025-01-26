'use client'
import { Box, Button, Stack, Typography } from "@mui/material";
import Tile from "./Tile";
import React, { useEffect } from "react";
import {useSelector} from "react-redux"
import { boardAtom, changeTurnAtom, moveMarbleAtom, rollDiceAtom, selectedDieAtom, setSelectedTileAtom } from "../store/features/board/board";
import { ITile, TileDirection } from "../types/interfaces";
import Dice from "./Dice";
import { useAtom } from "jotai";

export default function Board(){


    const [board, setBoard] = useAtom(boardAtom)
    const [selectedTile, setSelectedTile] = useAtom(setSelectedTileAtom)
    const [selectedDie, setSelectedDie] = useAtom(selectedDieAtom)
    const [currentMarble, moveMarble] = useAtom(moveMarbleAtom)
    const [turn, changeTurn] = useAtom(changeTurnAtom)
    const [dice, rollDice] = useAtom(rollDiceAtom)
    const keyDownHandler = (event: any) => {
        if(selectedDie && TileDirection[event.code]!== undefined && selectedTile?.nextTileDirection && selectedTile.nextTileDirection[turn.userId].toString() === TileDirection[event.code].toString()){
            if(selectedDie === "1" && turn.dice?.die1.remainingValue){
                moveMarble({currentTile: selectedTile, userId: turn.userId, nextTileIndex: 0})
            } else if (selectedDie === "2" && turn.dice?.die2.remainingValue){
                moveMarble({currentTile: selectedTile, userId: turn.userId, nextTileIndex: 0})
            }
        }
    }
    useEffect(() => {
        document.addEventListener("keydown", keyDownHandler);
    
        // clean up
        return () => {
          document.removeEventListener("keydown", keyDownHandler);
        };
      }, [selectedTile, turn, selectedDie, dice]);

    return (
        <Box>
            <Stack direction={'row'}>
            {board.board?.map((row, i1) => {

                return <Stack key={`${i1}`}direction={'column'}>{
                    (row.map((data, i2) => <Tile key={`${i1}-${i2}`} boxkey={`${i1}-${i2}`} data={data}/>))} </Stack>
            })}
            </Stack>

            <Dice/>
            <Stack sx={{mt: 2}} direction={"column"} spacing={1}>
            <Typography>Selected Marble is {selectedTile?.occupyingMarble?.id}</Typography>
            <Typography>It is {turn.userId}'s turn</Typography>


            { 
                ((selectedDie === "1" 
                    && turn.dice?.die1.value === turn.dice?.die1.remainingValue 
                    && (turn.dice?.die1.value === 6 || turn.dice?.die1.value === 1) 
                ) ||
                (selectedDie === "2" 
                    && turn.dice?.die2.value === turn.dice?.die2.remainingValue 
                    && (turn.dice?.die2.value === 6 || turn.dice?.die2.value === 1) 
                ))
                && selectedTile?.occupyingMarble?.isHome 
                ? <Button variant="contained" onClick={() => {
                    moveMarble({currentTile: selectedTile, userId: turn.userId, nextTileIndex: 0})
                }}>Get Out</Button> 
                : null
            }   

            <Button variant="contained" disabled={turn.canRollDice} onClick={() => changeTurn()}>End Turn</Button>
            </Stack>
        </Box>
    )
}