/**
 * Efa vita tsara
 */

import {useEffect, useState} from "react";
import {Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography} from "@mui/material";
import {CustomTextField} from "../../components/forms";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {Link} from "react-router-dom";
import axios from "axios";

const urlRegion = "http://localhost:8080/region";
const communeUrl = "http://localhost:8080/commune";

export default function AddCommune() {
    // nom, code, region states
    const [nom, setNom] = useState("");
    const [code, setCode] = useState("");
    const [region, setRegion] = useState("");
    const [regionData, setRegionData] = useState([]);

    // nom, code, region errors
    const [nomError, setNomError] = useState(false);
    const [codeError, setCodeError] = useState(false);
    const [regionError, setRegionError] = useState(false);


    useEffect(() => {
        axios.get(urlRegion).then((response) => {
            setRegionData(response.data);
        });
    }, []);
    console.log(regionData)


    const addCommune = () => {
        axios.post(communeUrl, {
            name: nom,
            code_cin: code,
            province: region
        }).then(r => console.log(r));
    }

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
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Région</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={region}
                                label="Région"
                                onChange={e => setRegion(e.target.value)}
                            >
                                {
                                    regionData.map((item, key) => <MenuItem key={key}
                                                                            value={item.id}>{item.name}</MenuItem>)
                                }
                            </Select>
                        </FormControl>

                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Button variant={"outlined"} sx={{textTransform: "none"}} fullWidth size={"large"}
                                onClick={addCommune}>
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
