import { Button, Grid, Paper } from "@mui/material";

import "../styles/candidatBox.css";
import Typography from "@mui/material/Typography";

import InfoIcon from "@mui/icons-material/Info";

export default function CandidatBox(props) {
     return (
          <Paper className={"candidat_container"} variant={"outlined"}>
               <div>
                    <img
                         className={"candidat_image"}
                         src={props.image}
                         alt="candidat"
                         width="100px"
                         height="100px"
                    />
               </div>
               <div className={"identity"}>
                    <Grid
                         container
                         direction="column"
                         alignContent={"start"}
                         spacing={2}
                         width={400}
                    >
                         <Grid item>
                              <Typography align={"left"}>
                                   <b>Nom : </b> {props.name}
                              </Typography>
                         </Grid>
                         <Grid item>
                              <Typography align={"left"}>
                                   <b>Prénom : </b> {props.lname}
                              </Typography>
                         </Grid>
                         <Grid item>
                              <Typography align={"left"}>
                                   <b>Age : </b> {props.age} ans
                              </Typography>
                         </Grid>
                         <Grid item>
                              <Typography align={"left"}>
                                   <b>Partie : </b> {props.partie}
                              </Typography>
                         </Grid>
                         <Grid item>
                              <Typography align={"left"}>
                                   <b>Adresse : </b> {props.adresse}
                              </Typography>
                         </Grid>
                         <Grid item>
                              <Button
                                   startIcon={<InfoIcon />}
                                   className={"btn_info"}
                              >
                                   En savoir plus sur {props.name}
                              </Button>
                         </Grid>
                    </Grid>
               </div>
          </Paper>
     );
}
