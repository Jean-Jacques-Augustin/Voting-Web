import Typography from "@mui/material/Typography";
import {Button, Container, Grid, Paper} from "@mui/material";
import {CustomDatePicker, CustomTextField} from "../../components/forms";
import Divider from "@mui/material/Divider";
import "../../styles/cin.css";
import {useRef, useState} from "react";

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



    return (
        <Container>
            <Paper>
                <Grid container direction="column" spacing={2} padding={2}>
                    <Grid item md={12}>
                        <Typography variant={"h5"} align={"left"}>
                            <b>Ajouter un CIN</b>
                        </Typography>
                    </Grid>
                    <Grid item md={12}>
                        <Divider/>
                    </Grid>
                    <Grid item md={12}>
                        <Grid container direction="row" spacing={2}>
                            <Grid item md={4}>

                                {
                                    image && url ? (
                                            <img src={url} alt={`sary ${url}`} style={{width: "100%"}}/>
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
                                                Glisser et déposer
                                                un image ici
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
                                                <CustomTextField label={"Nom"}/>
                                            </Grid>
                                            <Grid item xs={12} md={12}>
                                                <CustomTextField label={"Prénom"}/>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <CustomDatePicker label={"Date de naissance"}/>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <CustomTextField label={"Lieu de naissance"}/>
                                            </Grid>
                                            <Grid item xs={12} md={12}>
                                                <CustomTextField label={"Profession"}
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={12}>
                                                <CustomTextField label={"Père"}/>
                                            </Grid>
                                            <Grid item xs={12} md={12}>
                                                <CustomTextField label={"Mère"}/>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <CustomTextField label={"Numéro CIN"}/>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <CustomDatePicker label={"Date de délivrance"}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={12}>
                        <Button
                            variant={"outlined"}
                            color={"primary"}
                            sx={{textTransform: "none"}}
                            fullWidth
                            size={"large"}
                        >
                            Enregistrer
                        </Button>
                    </Grid>
                    <Grid item md={12}>
                        <Button
                            color={"primary"}
                            sx={{textTransform: "none"}}
                            fullWidth
                            size={"large"}
                        >
                            Retourner à la liste
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}
