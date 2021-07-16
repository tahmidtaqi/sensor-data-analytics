import React from 'react';
import Overviewcard from '../../components/overviewcomponents/overviewcards'
import Newproject from '../../components/overviewcomponents/newproject'
import Appdrawer from "../../components/appdrawer";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import Cookies from "js-cookie";
import Listofprojects  from '../../components/overviewcomponents/listofprojects';
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




const overview = (props) => {

    console.log(props);
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.root}>
            <Appdrawer></Appdrawer>
             <Listofprojects></Listofprojects>
            </Container>
        </div>
    );
};

export default overview;