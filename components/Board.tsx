import { Box, Stack } from "@mui/material";
import Tile from "./Tile";

export default function Board(){
    const board = [
        ["H2", "X",  "H2", "X",  "X",  "SH",  "S", "S",  "S", "S", "X",  "X",  "H3", "X",  "H3"],
        ["X",  "H2", "X",  "X",  "X",  "S",  "X", "G2", "X", "S",  "X",  "X",  "X",  "H3", "X"],
        ["H2", "X",  "H2", "X",  "X",  "S",  "X", "G2", "X", "S",  "X",  "X",  "H3", "X",  "H3"],
        ["X",  "X",  "X",  "X",  "X",  "S",  "X", "G2", "X", "S",  "X",  "X",  "X",  "X",  "X"],
        ["X",  "X",  "X",  "X",  "X",  "S",  "X", "G2", "X", "S",  "X",  "X",  "X",  "X",  "X"],
        ["S", "S",  "S",  "S",  "S",  "SC", "X", "G2", "X", "SC", "S",  "S",  "S",  "S",  "SH"],
        ["S",  "X",  "X",  "X",  "X",  "X",  "X", "X",  "X", "X",  "X",  "X",  "X",  "X",  "S"],
        ["S",  "G1", "G1", "G1", "G1", "G1", "X", "M",  "X", "G3", "G3", "G3", "G3", "G3", "S"],
        ["S",  "X",  "X",  "X",  "X",  "X",  "X", "X",  "X", "X",  "X",  "X",  "X",  "X",  "S"],
        ["SH",  "S",  "S",  "S",  "S",  "SC", "X", "G4", "X", "SC", "S",  "S",  "S",  "S",  "S"],
        ["X",  "X",  "X",  "X",  "X",  "S",  "X", "G4", "X", "S",  "X",  "X",  "X",  "X",  "X"],
        ["X",  "X",  "X",  "X",  "X",  "S",  "X", "G4", "X", "S",  "X",  "X",  "X",  "X",  "X"],
        ["H1", "X",  "H1", "X",  "X",  "S",  "X", "G4", "X", "S",  "X",  "X",  "H4", "X",  "H4"],
        ["X",  "H1", "X",  "X",  "X",  "S",  "X", "G4", "X", "S",  "X",  "X",  "X",  "H4", "X"],
        ["H1", "X",  "H1", "X",  "X",  "S", "S", "S",  "S", "SH",  "X",  "X",  "H4", "X",  "H4"],
    ]

    return (
        <Box>
            <Stack direction={'row'}>
            {board.map(row => {

                return <Stack direction={'column'}>{
                    (row.map((tile) => <Tile type={tile}/>))} </Stack>
            })}
            </Stack>
        </Box>
    )
}