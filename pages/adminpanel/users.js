import Sidenav from "../../components/Sidenav";
import Piechart from "../../components/piechart"

import {UserContext} from '../_app';
import { useContext } from "react";
import React from "react";
import Appdrawer from "../../components/appdrawer";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Container, Divider, Paper } from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';
import Agepiechart from "../../components/agepiechart"
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  sizing: {
    maxWidth: 400,
    margin:'40px auto' ,
    
  },
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,

    padding: theme.spacing(5),
  },
  applyfont:{
    fontFamily:'Poppins',

  }
}));




const users = () => {

  // const {props}=useContext(UserContext);
  // const{info,user}=props;
  const info=useContext(UserContext);
  //  console.log(props);
 
//  console.log(info);
  const classes = useStyles();
 
  

  return (
    // <div>Hi</div>
    <Container className={classes.root}>
        <Appdrawer></Appdrawer>
        <Container className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={3}>
        <Grid item xs={6}>
        <Card className={classes.sizing}  elevation={3}>
        <CardHeader  title="Users across gender"/>
        <Divider style={{backgroundColor:'#273457'}} variant="middle"/>
      <CardContent>
       <Piechart info={info}></Piechart>
       </CardContent>
       </Card>
       </Grid>
       <Grid item xs={6}>
       <Card className={classes.sizing}  elevation={3}>
        <CardHeader  title="Users across Age"/>
        <Divider style={{backgroundColor:'#273457'}} variant="middle"/>
      <CardContent>
      <Agepiechart  info={info}></Agepiechart>
       </CardContent>
       </Card>
       </Grid>
       </Grid>
       
       </Container>      
        </Container>
  );
};

export default users;
