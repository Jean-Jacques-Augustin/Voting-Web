import {useEffect, useState} from "react";
import {Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography} from "@mui/material";
import {CustomTextField} from "../../components/forms";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {Link} from "react-router-dom";
import axios from "axios";
import {baseUrl} from "../../constantes";

export default function AddBv() {
    // nom, code, commune
    const [nom, setNom] = useState("");
    const [code, setCode] = useState("");
    const [commune, setCommune] = useState("");

    // nom, code, commune errors
    const [nomError, setNomError] = useState(false);
    const [codeError, setCodeError] = useState(false);
    const [communeError, setCommuneError] = useState(false);
    const [communeData, setCommuneData] = useState([]);

    const createBv = () => {
        axios.post(baseUrl + "bv", {
            name: nom,
            code: code,
            commune: commune

        }).then(r => console.log(r));
    };




    useEffect(() => {
        axios.get(baseUrl + "commune").then((response) => {
            setCommuneData(response.data);
        });
    }, []);


    return (
        <Paper
            variant={"elevation"}
            sx={{padding: 2, margin: 2}}
            elevation={0}
        >
            <div className={"add_center"}>
                <Grid container direction="row" spacing={2} width={400}>
                    <Grid item xs={12} md={12}>
                        <Typography variant={"h6"}>
                            Enregistrement d'un nouveau bureau de vote
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <CustomTextField
                            label={"Nom"}
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <CustomTextField
                            label={"Code"}
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Commune</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={commune}
                                label="Age"
                                //onChange={handleChange}
                            >
                                {communeData.map((item, key) => <MenuItem value={10}>{item.name}</MenuItem>)}

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Button
                            variant={"outlined"}
                            sx={{textTransform: "none"}}
                            fullWidth
                            size={"large"}
                        >
                            Enregistrer
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Button
                            sx={{textTransform: "none"}}
                            fullWidth
                            size={"large"}
                            startIcon={<KeyboardBackspaceIcon/>}
                            component={Link}
                            to={"/bv"}
                        >
                            Retourner à la liste
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Paper>
    );
}
