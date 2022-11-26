import imageTest from "../../img/candidatTest.jpg";
import CandidatBox from "../../components/candidatBox";
import { Button, Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import { CustomModal, CustomTextField } from "../../components/forms";
import AddCandidat from "./addCandidat";

const candidatList = [
     {
          image: imageTest,
          name: "blablabla blablabla",
          lname: "blablablablablabla",
          age: 20,
          partie: "blablablablablabla",
          adresse: "blablabla",
     },
     {
          image: imageTest,
          name: "blablabla blablabla",
          lname: "blablablablablabla",
          age: 20,
          partie: "blablablablablabla",
          adresse: "blablabla",
     },
     {
          image: imageTest,
          name: "blablabla blablabla",
          lname: "blablablablablabla",
          age: 20,
          partie: "blablablablablabla",
          adresse: "blablabla",
     },
     {
          image: imageTest,
          name: "blablabla blablabla",
          lname: "blablablablablabla",
          age: 20,
          partie: "blablablablablabla",
          adresse: "blablabla",
     },
     {
          image: imageTest,
          name: "blablabla blablabla",
          lname: "blablablablablabla",
          age: 20,
          partie: "blablablablablabla",
          adresse: "blablabla",
     },
];

export default function Candidat() {
     return (
          <Paper sx={{ p: 2 }} elevation={0}>
               <div>
                    <Typography variant={"h5"} align={"center"} sx={{ pl: 2 }}>
                         Candidat
                    </Typography>
               </div>

               {candidatList.map((item, key) => (
                    <CandidatBox
                         key={key}
                         image={item.image}
                         name={item.name}
                         lname={item.lname}
                         age={item.age}
                         partie={item.partie}
                         adresse={item.adresse}
                    />
               ))}

               <CustomModal>
                    <AddCandidat />
               </CustomModal>
          </Paper>
     );
}
