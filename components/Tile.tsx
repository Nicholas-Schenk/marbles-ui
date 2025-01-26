"use client"
import { Box } from "@mui/material";
import React from "react";
import { ITile, TileColor } from "../types/interfaces";
import { setSelectedTileAtom } from "@/store/features/board/board";
import { useAtom } from "jotai";

export default function Tile({data, boxkey}: {data: ITile, boxkey: string}){
    const getPlayerColorById = (id: string) => {
        if(id === "1"){
            return "red";
        } else if (id ==="2"){
            return "blue"
        } else if(id === "3"){
            return "green"
        } else if(id === "4"){
            return "yellow"
        }
    }

    const getColor = (type: string) => {
        if(type.includes("S") || type === "M"){
            return "gray"
        } else if(type.includes("H") || type.includes("G")){
            return getPlayerColorById(type.charAt(1))
        }
    }
    const getBorder = (type: string) => {
        if(type === "M" || type.includes("H")){
            return "2px solid white"
        } else if(type !== "X"){
            return "1px solid white"
        }
    }

    const [selectedTile, setSelectedTile] = useAtom(setSelectedTileAtom)

    const setTile = () => {
        
        if(data.occupyingMarble){
            if(selectedTile?.id === data.id){
                setSelectedTile(undefined)
            } else {
                setSelectedTile(data)
            }
        }
    }

    return (
        <Box onClick = {() => setTile()}key={"box" + boxkey}sx={{width:'20px', height: '20px', border: `${data.borderColor ? '2px': '1px'} solid ${data.borderColor ? TileColor[data.borderColor]: "black"}`, backgroundColor: data.occupyingMarble ? TileColor[data.occupyingMarble.color] : TileColor[data.color]}}>
            {data.id}
        </Box>
    )
}