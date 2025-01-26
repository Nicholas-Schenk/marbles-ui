'use client'
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { changeTurnAtom, rollDiceAtom, selectedDieAtom } from "../store/features/board/board";
import { useAtom } from "jotai";

export default function Dice(){
    const [dice, rollDice] = useAtom(rollDiceAtom)
    const [turn, changeTurn] = useAtom(changeTurnAtom)
    const [selectedDie, setSelectedDie] = useAtom(selectedDieAtom)

    const onClick = (val: "1" | "2") => {
        if(dice){
            if(val === "1"){
                if(!selectedDie){
                    setSelectedDie(val)
                }
                //can only unselect if have not used any or all of the die.
                else if(val === selectedDie && (dice.die1.remainingValue === dice.die1.value)){
                    setSelectedDie(undefined)
                } else if (val !== selectedDie && (dice.die2.remainingValue === dice.die2.value || dice.die2.remainingValue === 0)){
                    setSelectedDie(val)
                }
            } else {
                if(!selectedDie){
                    setSelectedDie(val)
                }
                //can only unselect if have not used any of the die.
                else if(val === selectedDie && dice.die2.remainingValue === dice.die2.value){
                    setSelectedDie(undefined)
                } else if (val !== selectedDie && (dice.die1.remainingValue === dice.die1.value || dice.die1.remainingValue === 0)){
                    setSelectedDie(val)
                }
            }

        }
    }

    return (
        <Box sx={{mt: 2}}>
            <Stack direction={'row'}>
                <Stack direction={'column'} sx={{width: "100px"}}>
                    <Box onClick = {() => onClick("1")} sx={{border: selectedDie === "1" ? "2px solid red": null, height: 50, width: 50, backgroundColor: 'white', textAlign: "center", pt: 1.75, mr: 2, color: "black"}}>{dice?.die1.value}</Box>
                    <Typography>remaining: {dice?.die1.remainingValue}</Typography>
                </Stack>
                <Stack direction={'column'} sx={{width: "100px"}}>
                <Box onClick = {() => onClick("2")} sx={{border: selectedDie === "2" ? "2px solid red": null, height: 50, width: 50, backgroundColor: 'white', textAlign: "center", pt: 1.75, mr: 2, color: "black"}}>{dice?.die2.value}</Box>
                <Typography>remaining: {dice?.die2.remainingValue}</Typography>
                </Stack>
                <Button disabled = {!turn.canRollDice} variant="contained" onClick={() => {rollDice()}}>ROLL DICE</Button>
            </Stack>
            
        </Box>
    )
}