/**
 - nom
 - prenom
 - sexe
 - lieu_naissance
 - adresse
 - profession
 - pere
 - mere
 - photo
 - num_cin
 - date_naissance
 - date_delivrance
 - lieu_delivrance
 */
import CinBox from "../../components/cinBox";
import {CustomSearchBar} from "../../components/forms";
import {Button, Container, Grid} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {Link} from "react-router-dom";
import * as React from "react";
import {useEffect} from "react";
import PrintIcon from "@mui/icons-material/Print";
import axios from "axios";
import {baseUrl} from "../../constantes";


export default function Cin() {

    // get data from api

    const [data, setData] = React.useState([]);


    useEffect(() => {

        axios.get(baseUrl).then((response) => {
            setData(response.data);
        });
    }, []);

    return (
        <Container className="cin">
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                margin={2}
            >
                <Grid item md={8}>
                    <CustomSearchBar/>
                </Grid>
                <Grid item md={2}>
                    <div>
                        <Button startIcon={<AddIcon/>} variant={"outlined"} sx={{mr: 2, textTransform: "none"}}
                                component={Link} to={"/addCin"}>
                            Nouveau
                        </Button>
                    </div>
                </Grid>
                <Grid item md={2}>
                    <Button startIcon={<PrintIcon/>} variant={"outlined"} className={"button-right"}>
                        Imprimer
                    </Button>
                </Grid>
            </Grid>
            {
                data.map((cin, index) => (
                    <CinBox
                        key={index}
                        name={cin.nom}
                        lname={cin.prenom}
                        sexe={cin.sexe}
                        lieu_naissance={cin.lieu_naissance}
                        adresse={cin.adresse}
                        profession={cin.profession}
                        pere={cin.pere}
                        mere={cin.mere}
                        num_cin={cin.num_cin}
                        date_naissance={cin.date_naissance}
                        date_delivrance={cin.date_delivrance}
                        lieu_delivrance={cin.lieu_delivrance}
                    />
                ))
            }
        </Container>
    )
};
