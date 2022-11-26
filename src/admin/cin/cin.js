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
import PrintIcon from "@mui/icons-material/Print";

const CinData = [
    {
        nom: "BENKHALIFA",
        prenom: "Mohamed",
        sexe: "Homme",
        lieu_naissance: "Tanger",
        adresse: "Tanger",
        profession: "Etudiant",
        pere: "BENKHALIFA",
        mere: "BENKHALIFA",
        photo: "https://www.lematin.ma/wp-content/uploads/2021/07/20210720_1610_1.jpg",
        num_cin: "123456789",
        date_naissance: "01/01/2000",
        date_delivrance: "01/01/2021",
        lieu_delivrance: "Tanger"
    },
    {
        nom: "BENKHALIFA",
        prenom: "Mohamed",
        sexe: "Homme",
        lieu_naissance: "Tanger",
        adresse: "Tanger",
        profession: "Etudiant",
        pere: "BENKHALIFA",
        mere: "BENKHALIFA",
        photo: "https://www.lematin.ma/wp-content/uploads/2021/07/20210720_1610_1.jpg",
        num_cin: "123456789",
        date_naissance: "01/01/2000",
        date_delivrance: "01/01/2021",
        lieu_delivrance: "Tanger"
    },

    {
        nom: "BENKHALIFA",
        prenom: "Mohamed",
        sexe: "Homme",
        lieu_naissance: "Tanger",
        adresse: "Tanger",
        profession: "Etudiant",
        pere: "BENKHALIFA",
        mere: "BENKHALIFA",
        photo: "https://www.lematin.ma/wp-content/uploads/2021/07/20210720_1610_1.jpg",
        num_cin: "123456789",
        date_naissance: "01/01/2000",
        date_delivrance: "01/01/2021",
        lieu_delivrance: "Tanger"
    }
    ,
    {
        nom: "BENKHALIFA",
        prenom: "Mohamed",
        sexe: "Homme",
        lieu_naissance: "Tanger",
        adresse: "Tanger",
        profession: "Etudiant",
        pere: "BENKHALIFA",
        mere: "BENKHALIFA",
        photo: "https://www.lematin.ma/wp-content/uploads/2021/07/20210720_1610_1.jpg",
        num_cin: "123456789",
        date_naissance: "01/01/2000",
        date_delivrance: "01/01/2021",
        lieu_delivrance: "Tanger"
    },

    {
        nom: "BENKHALIFA",
        prenom: "Mohamed",
        sexe: "Homme",
        lieu_naissance: "Tanger",
        adresse: "Tanger",
        profession: "Etudiant",
        pere: "BENKHALIFA",
        mere: "BENKHALIFA",
        photo: "https://www.lematin.ma/wp-content/uploads/2021/07/20210720_1610_1.jpg",
        num_cin: "123456789",
        date_naissance: "01/01/2000",
        date_delivrance: "01/01/2021",
        lieu_delivrance: "Tanger"
    },

    {
        nom: "BENKHALIFA",
        prenom: "Mohamed",
        sexe: "Homme",
        lieu_naissance: "Tanger",
        adresse: "Tanger",
        profession: "Etudiant",
        pere: "BENKHALIFA",
        mere: "BENKHALIFA",
        photo: "https://www.lematin.ma/wp-content/uploads/2021/07/20210720_1610_1.jpg",
        num_cin: "123456789",
        date_naissance: "01/01/2000",
        date_delivrance: "01/01/2021",
        lieu_delivrance: "Tanger"
    }

]


export default function Cin() {

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
                CinData.map((cin, index) => (
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
