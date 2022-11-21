import {Button, Grid, Paper} from "@mui/material";
import {CustomTextField} from "../../components/forms";
import * as React from "react";
import {useState} from "react";
import Typography from "@mui/material/Typography";
import SaveIcon from '@mui/icons-material/Save';


export default function AddCandidat() {
    //definition state
    const [identifiant, setIdentifiant] = useState();
    const [partie, setPartie] = useState();


    return (<div style={{
        flexDirection: "row",
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    }}>
        <Paper variant={"elevation"} sx={{m: 0, p: 2, width: '800px'}}>
            <Grid
                direction={"row"}
                container
                justifyContent={"center"}
                spacing={2}
                alignContent={"center"}
            >
                <Grid item md={12}>
                    <Typography variant={"h6"} align={"center"}>
                        Enregistrer un nouveau candidat
                    </Typography>
                </Grid>
                <Grid item md={12}>
                    <CustomTextField
                        type={"text"}
                        value={identifiant}
                        label={"Identifiant du personne"}
                        onChange={e => setIdentifiant(e.target.value)}
                    />
                </Grid>
                <Grid item md={12}>
                    <CustomTextField
                        type={"text"}
                        value={partie}
                        label={"Partie du candidat"}
                        onChange={e => setPartie(e.target.value)}
                    />
                </Grid>
                <Grid item md={12}>
                    <Button
                        variant={"contained"}
                        fullWidth
                        size={"large"}
                        sx={{
                            textTransform :"none"
                        }}
                        startIcon={<SaveIcon/>}
                    >
                        Enregistrer
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    </div>)
}
