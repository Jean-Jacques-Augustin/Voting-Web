import {Button, Grid, Paper, Typography} from "@mui/material";
import {CustomTextField} from "../../components/forms";
import {useState} from "react";
import "../../styles/admin.css"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {Link} from "react-router-dom";
import axios from "axios";

const baseUrl = "http://localhost:8080/region";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 * @TODO : Efa vita tsara
 */

export default function AddRegion() {
    const [nom, setNom] = useState("");
    const [description, setDescription] = useState("");

    const createRegion = () => {
        axios.post(baseUrl, {
            name: nom,
            description: description
        }).then(r => console.log(r));
    };


    return (
        <Paper variant={"elevation"} sx={{padding: 2, margin: 2}} elevation={0}>
            <div className={"add_center"}>
                <Grid
                    container
                    direction="row"
                    spacing={2}
                    width={400}

                >
                    <Grid item xs={12} md={12}>
                        <Typography variant={"h6"}>
                            Enregistrement d'une nouvelle région
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <CustomTextField label={"Nom"}
                                         type={"text"}
                                         value={nom}
                                         onChange={e => setNom(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <CustomTextField label={"Description"}
                                         type={"text"} value={description}
                                         onChange={e => setDescription(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Button variant={"outlined"}
                                sx={{textTransform: "none"}}
                                fullWidth
                                size={"large"}
                                onClick={createRegion}
                        >
                            Enregistrer
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Button sx={{textTransform: "none"}}
                                fullWidth
                                size={"large"}
                                startIcon={<KeyboardBackspaceIcon/>}
                                component={Link} to={"/region"}
                        >
                            Retourner à la liste
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Paper>
    )
}
