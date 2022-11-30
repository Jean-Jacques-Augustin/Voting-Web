import * as React from 'react';
import {useEffect, useState} from 'react';
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
import axios from "axios";
import {baseUrl} from "../../constantes";


export default function Commune() {

    const [comData, setComData] = useState([]);

    useEffect(() => {
        axios.get(baseUrl + "commune").then((response) => {
            setComData(response.data);
        });
    }, []);

    return (
        <Paper sx={{p: 2}}>
            <div className={"top-panel"}>
                <Typography variant={"h5"} align={"left"} sx={{pl: 2}}>
                    Commune
                </Typography>
                <div>
                    <Button startIcon={<AddIcon/>} variant={"outlined"} sx={{mr: 2, textTransform: "none"}}
                            component={Link} to={"/addCommune"}>
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
                            <TableCell><b>Code CIN</b></TableCell>
                            <TableCell><b>Region</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {
                            comData.map((item, key) => (
                                <TableRow
                                    key={item.id}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.id}
                                    </TableCell>
                                    <TableCell>{item.nom}</TableCell>
                                    <TableCell>{item.code}</TableCell>
                                    <TableCell>{item.region}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
