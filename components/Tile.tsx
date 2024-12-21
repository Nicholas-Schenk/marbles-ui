import { Box } from "@mui/material";

export default function Tile({type}: {type: string}){
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

    return (
        <Box sx={{width:'20px', height: '20px', border: getBorder(type), backgroundColor: getColor(type)}}></Box>
    )
}