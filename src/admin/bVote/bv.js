import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import "../../styles/admin.css"
import PrintIcon from '@mui/icons-material/Print';
import AddIcon from '@mui/icons-material/Add';
import {Link} from "react-router-dom";


const regionData = [
    {
        id: 1,
        nom: "Haute Matsiatra",
        code: "Alaotra",
        commune: "Fianarantsoa"
    },
    {
        id: 2,
        nom: "Alaotra",
        code: "Alaotra",
        commune: "Fianarantsoa"
    },
    {
        id: 3,
        nom: "Vakinakaratra",
        code: "Alaotra",
        commune: "Fianarantsoa"
    },
    {
        id: 4,
        nom: "Itasy",
        code: "Alaotra",
        commune: "Fianarantsoa"
    },
    {
        id: 5,
        nom: "Antsimo antsinanana",
        code: "Alaotra",
        commune: "Fianarantsoa"
    }
]


export default function Bv() {
    return (
        <Paper sx={{p: 2}}>
            <div className={"top-panel"}>
                <Typography variant={"h5"} align={"left"} sx={{pl: 2}}>
                    Burreau de vote
                </Typography>
                <div>
                    <Button startIcon={<AddIcon/>} variant={"outlined"} sx={{mr: 2, textTransform: "none"}}
                            component={Link} to={"/addBv"}>
                        Nouveau
                    </Button>
                    <Button startIcon={<PrintIcon/>} variant={"outlined"} className={"button-right"}>
                        Imprimer
                    </Button>
                </div>
            </div>
            <TableContainer>
                <Table sx={{minWidth: 650}} aria-label="Tableau des région">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Identifiant</b></TableCell>
                            <TableCell><b>Nom</b></TableCell>
                            <TableCell><b>Code</b></TableCell>
                            <TableCell><b>Commune</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            regionData.map((item, key) => (
                                <TableRow
                                    key={item.id}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.id}
                                    </TableCell>
                                    <TableCell>{item.nom}</TableCell>
                                    <TableCell>{item.code}</TableCell>
                                    <TableCell>{item.commune}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
