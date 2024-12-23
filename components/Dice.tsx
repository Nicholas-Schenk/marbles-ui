'use client'
import { Box, Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import {useSelector} from "react-redux"
import { rollDiceAtom } from "../store/features/board/board";
import {Dice as DiceType} from "../types/interfaces"
import { useAtom } from "jotai";

export default function Dice(){
    const [dice, rollDice] = useAtom(rollDiceAtom)

    console.log(dice)
    useEffect(() => {console.log("test")}, [])
    

    return (
        <Box>
            <Stack direction={'row'}>
                <Box sx={{height: 50, width: 50}}>{dice.die1}</Box>
                <Box sx={{height: 50, width: 50}}>{dice.die2}</Box>
            </Stack>
            <Button onClick={() => {rollDice(false)}}>ROLL</Button>
        </Box>
    )
}