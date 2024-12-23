'use client'
import { Box, Stack, Typography } from "@mui/material";
import Tile from "./Tile";
import React, { useEffect } from "react";
import {useSelector} from "react-redux"
import { boardAtom, setSelectedTileAtom } from "../store/features/board/board";
import { ITile } from "../types/interfaces";
import Dice from "./Dice";
import { useAtom } from "jotai";

export default function Board(){


    const [board, setBoard] = useAtom(boardAtom)
    const [selectedTile, setSelectedTile] = useAtom(setSelectedTileAtom)
    console.log(board);


    useEffect(() => {console.log("test")}, [])
    return (
        <Box>
            <Stack direction={'row'}>
            {board.board?.map((row, i1) => {

                return <Stack key={`${i1}`}direction={'column'}>{
                    (row.map((data, i2) => <Tile key={`${i1}-${i2}`} boxkey={`${i1}-${i2}`} data={data}/>))} </Stack>
            })}
            </Stack>

            <Dice/>

            <Typography>Selected Tile is {selectedTile?.id}</Typography>
        </Box>
    )
}