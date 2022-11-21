// add commune

import {useState} from "react";
import {Button, Grid, Paper, Typography} from "@mui/material";
import {CustomTextField} from "../../components/forms";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {Link} from "react-router-dom";

export default function AddCommune() {
    // nom, code, region states
    const [nom, setNom] = useState("");
    const [code, setCode] = useState("");
    const [region, setRegion] = useState("");

    // nom, code, region errors
    const [nomError, setNomError] = useState(false);
    const [codeError, setCodeError] = useState(false);
    const [regionError, setRegionError] = useState(false);

    return (
        <Paper variant={"elevation"} sx={{padding: 2, margin: 2}} elevation={0}>
            <div className={"add_center"}>
                <Grid
                    container
                    direction="row"
                    spacing={2}
                    width={400}>
                    <Grid item xs={12} md={12}>
                        <Typography variant={"h6"}>
                            Enregistrement d'une nouvelle commune
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <CustomTextField label={"Nom"} value={nom} onChange={e => setNom(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <CustomTextField label={"Code"} value={code} onChange={e => setCode(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <CustomTextField label={"Région"} value={region} onChange={e => setRegion(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Button variant={"outlined"} sx={{textTransform: "none"}} fullWidth size={"large"}>
                            Enregistrer
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Button sx={{textTransform: "none"}}
                                fullWidth size={"large"}
                                startIcon={<KeyboardBackspaceIcon/>}
                                component={Link} to={"/commune"}
                        >
                            Retourner à la liste
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Paper>
    )
}
