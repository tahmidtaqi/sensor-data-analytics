import React from "react";
import Overviewcard from "../../components/overviewcomponents/overviewcards";
import Newproject from "../../components/overviewcomponents/newproject";
import Appdrawer from "../../components/appdrawer";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";
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

const listofprojects = () => {
  // const [userid, setUserid] = useState(null);
  const [projectlist, setProjectlist] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    //setUserid(Cookies.get("user"));
    const userid = Cookies.get("user");
    axios
      .get("/api/fetchprojects?userid=" + userid)
      .then(function (response) {
        setProjectlist(response.data.fetch);
       
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    console.log(projectlist)
  }, [projectlist]);

  return (
    <div>
      <Container className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={3}>
          {projectlist.map((element, index) => (
            
            <Grid key={index} item xs={6}>
              <Overviewcard props={element}></Overviewcard>
            </Grid>
          ))}

          <Newproject></Newproject>
        </Grid>
      </Container>
    </div>
  );
};

export default listofprojects;
