import { useState, useEffect } from "react";
import fire from "../../config/fire-conf";



import Datatable from "../../components/Table";

import data from "../../Sensordata.json";


import {UserContext} from '../_app';
import { useContext } from "react";

import React from "react";
import Appdrawer from "../../components/appdrawer";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
// const db = fire.database();
import Loginstatuscheck  from "../../components/loginstatuscheck";


const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,

    padding: theme.spacing(5),
  },
}));

const activesensors = () => {

  const info=useContext(UserContext);
  const classes = useStyles();
//   useEffect(() => {
//     console.log(info);
//  }, [info]);
  // const [info, setInfo] = useState({});

  // async function getdata() {
  
  //   const ref = db.ref().child("SENSORDATA/USERS");
  //   ref.on("value", (snapshot) => {
  //     const data = snapshot.val();
  //     setInfo({ ...snapshot.val() });
  //     //console.log(data);
  //   });

    
  // }
  // useEffect(() => {
  //   console.log(info);
  // }, [info]);

  // useEffect(() => {
  //   getdata();
  // }, []);

//const info= data.SENSORDATA.USERS;
  // console.log(info);
  return (
    <Loginstatuscheck>
    <Container className={classes.root}>
        <Appdrawer></Appdrawer>
        <Container className={classes.content}>

        <div className={classes.toolbar} />
          {<Datatable info={info}></Datatable>}
          </Container>      
          </Container>      
          </Loginstatuscheck>
  );
};

export default activesensors;
