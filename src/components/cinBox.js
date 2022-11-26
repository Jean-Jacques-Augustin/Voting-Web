import { Grid, Paper } from "@mui/material";

import "../styles/candidatBox.css";
import Typography from "@mui/material/Typography";

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

export default function CinBox(props) {
     return (
          <Paper variant={"outlined"} sx={{ p: 2, m: 2 }}>
               <Grid
                    container
                    direction="row"
                    alignContent={"start"}
                    spacing={2}
               >
                    <Grid item md={4} xs={12}>
                         <Typography align={"left"}>
                              <b>Nom : </b> {props.name}
                         </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                         <Typography align={"left"}>
                              <b>Prénom : </b> {props.lname}
                         </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                         <Typography align={"left"}>
                              <b>Sexe : </b> {props.age} ans
                         </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                         <Typography align={"left"}>
                              <b>Lieu de naissance</b> {props.partie}
                         </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                         <Typography align={"left"}>
                              <b>Profession : </b> {props.adresse}
                         </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                         <Typography align={"left"}>
                              <b>Père </b> {props.adresse}
                         </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                         <Typography align={"left"}>
                              <b>Mère </b> {props.adresse}
                         </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                         <Typography align={"left"}>
                              <b>Numéro CIN </b> {props.adresse}
                         </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                         <Typography align={"left"}>
                              <b>Date de délivrance </b> {props.adresse}
                         </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                         <Typography align={"left"}>
                              <b>Lieu de délivrance </b> {props.adresse}
                         </Typography>
                    </Grid>
               </Grid>
          </Paper>
     );
}
