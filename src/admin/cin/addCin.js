import Typography from "@mui/material/Typography";
import {Button, FormControl, Grid, Paper, Radio, RadioGroup} from "@mui/material";
import {CustomDatePicker, CustomTextField} from "../../components/forms";
import Divider from "@mui/material/Divider";
import "../../styles/cin.css";
import {useEffect, useRef, useState} from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from "axios";


const baseUrl = "http://localhost:8080/cin";


export default function AddCin() {

    // Image
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const fileInput = useRef(null);

    const handleOndragover = (e) => {
        e.preventDefault();
        setImage(null);
        setUrl("");
    };


    const handleFile = (file) => {
        setImage(file);
        setUrl(URL.createObjectURL(file));
    }

    const handleOndrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files[0];
        handleFile(files);
    }
    // Fin Image

    // cin state

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [sexe, setSexe] = useState("");
    const [lieuNaissance, setLieuNaissance] = useState("");
    const [adresse, setAdresse] = useState("");
    const [profession, setProfession] = useState("");
    const [pere, setPere] = useState("");
    const [mere, setMere] = useState("");
    const [lieuDelivrance, setLieuDelivrance] = useState("");
    const [numcin, setNumcin] = useState("");
    const [dateNaissance, setDateNaissance] = useState(new Date());
    const [dateDelivrance, setDateDelivrance] = useState(new Date());

    let dateDeNaissance, dateDeDelivrance;

    // On c



    useEffect(() => {
        dateDeNaissance = dateNaissance.getFullYear() + "-" + dateNaissance.getMonth() + "-" + dateNaissance.getDate();
        dateDeDelivrance = dateDelivrance.getFullYear() + "-" + dateDelivrance.getMonth() + "-" + dateDelivrance.getDate();
    }, [])


    function handleSave() {

        axios.post(baseUrl, {
            nom: nom,
            prenom: prenom,
            sexe: sexe,
            lieu_naissance: lieuNaissance,
            adresse: adresse,
            profession: profession,
            pere: pere,
            mere: mere,
            lieu_delivrance: lieuDelivrance,
            num_cin: numcin,
            date_naissance: dateDeNaissance,
            date_delivrance: dateDeDelivrance,
            image: url
        }).then(response => {
            if (response.statusText.match("error")) {
                console.log("Error")
            }
        })
    }

    return (
        <Paper elevation={0}>
            <Grid container direction="column" spacing={2} padding={2}>
                <Grid item md={12}>
                    <Typography variant={"h6"} align={"center"}>
                        <b>Ajouter un CIN</b>
                        <br/>
                        <Divider/>
                    </Typography>
                </Grid>
                <Grid item md={12}>
                    <Grid container direction="row" spacing={2}>
                        <Grid item md={4}>

                            {
                                image && url ? (
                                        <img src={url} alt={`Sary ${url}`} style={{width: "100%"}}/>
                                    ) :
                                    <div className={"drag_drop"}
                                         onDragOver={handleOndragover}
                                         onDrop={handleOndrop}
                                         onClick={() => fileInput.current.click()}
                                    >
                                        <Typography
                                            variant={"h6"}
                                            align={"center"}
                                        >
                                            Glisser et déposer un image ici
                                        </Typography>
                                        <input
                                            type="file"
                                            accept='image/*'
                                            ref={fileInput} hidden
                                            onChange={e => handleFile(e.target.files[0])}
                                        />
                                    </div>
                            }

                        </Grid>
                        <Grid item md={8}>
                            <Grid
                                container
                                direction="row"
                                alignContent={"center"}
                                justifyContent={"center"}
                                spacing={2}
                            >
                                <Grid item md={12}>
                                    <Typography
                                        variant={"h6"}
                                        align={"left"}
                                    >
                                        Informations personnelles
                                    </Typography>
                                </Grid>
                                <Grid item md={12}>
                                    <Grid
                                        container
                                        direction="row"
                                        alignContent={"center"}
                                        justifyContent={"center"}
                                        spacing={2}
                                    >
                                        <Grid item xs={12} md={12}>
                                            <CustomTextField label={"Nom"}
                                                             value={nom}
                                                             onChange={e => setNom(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={8} md={8}>
                                            <CustomTextField label={"Prénom"}
                                                             value={prenom}
                                                             onChange={e => setPrenom(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={4} md={4}>
                                            <FormControl sx={{
                                                height: "100%",
                                                margin: "auto",
                                                display: "flex",
                                                alignContent: "center",
                                                justifyContent: "center"
                                            }}>
                                                <RadioGroup
                                                    row
                                                    aria-labelledby="radio-button-sexe"
                                                    name="radio-button-sexe"
                                                    sx={{
                                                        display: "flex",
                                                        alignContent: "center",
                                                        justifyContent: "center"
                                                    }}
                                                    value={sexe}
                                                    onChange={e => setSexe(e.target.value)}
                                                >
                                                    <FormControlLabel value="F" control={<Radio/>}
                                                                      label="Feminin"/>
                                                    <FormControlLabel value="M" control={<Radio/>}
                                                                      label="Masculin"/>
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <CustomDatePicker label={"Date de naissance"}
                                                              value={dateNaissance}
                                                              onChange={e => setDateNaissance(e)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <CustomTextField label={"Lieu de naissance"}
                                                             value={lieuNaissance}
                                                             onChange={e => setLieuNaissance(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <CustomTextField label={"Profession"}
                                                             value={profession}
                                                             onChange={e => setProfession(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <CustomTextField label={"Adresse"}
                                                             value={adresse}
                                                             onChange={e => setAdresse(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <CustomTextField label={"Père"}
                                                             value={pere}
                                                             onChange={e => setPere(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <CustomTextField label={"Mère"}
                                                             value={mere}
                                                             onChange={e => setMere(e.target.value)}

                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <CustomTextField label={"Numéro CIN"}
                                                             value={numcin}
                                                             onChange={e => setNumcin(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <CustomDatePicker label={"Date de délivrance"}
                                                              value={dateDelivrance}
                                                              onChange={e => setDateDelivrance(e)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={12}>
                                            <CustomTextField label={"Lieu de délivrance"}
                                                             value={lieuDelivrance}
                                                             onChange={e => setLieuDelivrance(e.target.value)}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={12}>
                    <Button
                        variant={"contained"}
                        color={"primary"}
                        sx={{textTransform: "none"}}
                        fullWidth
                        size={"medium"}
                        onClick={handleSave}
                    >
                        Enregistrer
                    </Button>
                </Grid>
                <Grid item md={12}>
                    <Button
                        color={"primary"}
                        sx={{textTransform: "none"}}
                        fullWidth
                        size={"medium"}
                    >
                        Retourner à la liste
                    </Button>
                </Grid>
            </Grid>
        </Paper>

    );
}
