import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Avatar, Card, CardContent, Container, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import LockIcon from "@material-ui/icons/Lock";
import FormHelperText from "@material-ui/core/FormHelperText";
import Navbar from "../components/navbar";
import fire from "../config/fire-conf";
import { useRouter } from "next/router";
import axios from "axios";
import Authcheck from "../components/authcheck";
import { useCookies } from "react-cookie";

import { parseCookies } from "../components/cookiefetch"
export const UserContext = React.createContext();
const db2 = fire.firestore();

// db2.settings({timestampsInSnapshots:true});

const useStyles = makeStyles((theme) => ({
  field: {
    marginTop: 20,
    marginBottom: 20,
    // display: "block",
  },
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,

    padding: theme.spacing(5),
  },
  cardstyle: {
    maxHeight: "100vh",
    maxWidth: 350,
    margin: "20px auto",
    padding: 40,
  },
  applycolor: {
    backgroundColor: "#20283E",
  },
}));
const login = ({data}) => {
  const router = useRouter();
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [accounts, setAccounts] = useState({});
  const [password, setPassword] = useState("");
  const [usernameError, setusernameError] = useState(false);
  const [helperText, sethelperText] = useState("");
  const [helperText2, sethelperText2] = useState("");
  const [passwordError, setpasswordError] = useState(false);
  const [cookie, setCookie] = useCookies(["user"]);

  var loggedinuserid = null;
  let userstatus = false;
  //function for fetching data from firebase
  const [userinfo, setuserinfo] = useState({});

  // getting data
  async function getusers() {
    // db2
    //   .collection("Admin")
    //   .get()
    //   .then((snapshot) => {
    //     snapshot.docs.forEach((doc) => {
    //       // console.log(doc.data());
    //       setAccounts({ ...doc.data() });
    //     });
    //   });
    // Make a request for a user with a given ID
    // axios
    //   .get("api/hello")
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });
  }

  useEffect(() => {
    getusers();
    console.log(data);
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    setusernameError(false);
    setpasswordError(false);
    sethelperText("");
    sethelperText2("");
    if (username == "") {
      setusernameError(true);
      sethelperText("Please enter the username");
    }
    if (password == "") {
      setpasswordError(true);
      sethelperText2("Please enter the password");
    }
    if (username && password) {
     
      axios
        .post("api/hello", {
          username: username,
          password: password,
        })
        .then(function (response) {
          console.log(response.data.userid);
          //store the response id
          loggedinuserid = response.data.userid;
          setCookie("user", loggedinuserid, {
            path: "/",
            maxAge: 7200, // Expires after 1hr then gone
            sameSite: true,
          });
          router.push("/adminpanel/activesensors");
          //window.location="/login";
          console.log(loggedinuserid);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <Authcheck>
    <Container className={classes.root}>
      {/* <Authcheck value={ loggedinuserid}></Authcheck> */}
     
      <Navbar></Navbar>
      <Container className={classes.content}>
        <div className={classes.toolbar} />
        <Grid>
          <Paper elevation={10} className={classes.cardstyle}>
            <Grid align="center">
              <Avatar className={classes.applycolor}>
                <LockIcon />
              </Avatar>
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                  onChange={(e) => setUsername(e.target.value)}
                  className={classes.field}
                  id="standard-basic"
                  label="Username"
                  required
                  error={usernameError}
                  helperText={helperText}
                />
                <TextField
                  onChange={(e) => setPassword(e.target.value)}
                  className={classes.field}
                  id="standard-basic"
                  label="Password"
                  type="password"
                  required
                  error={passwordError}
                  helperText={helperText2}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="medium"
                >
                  Submit
                </Button>
              </form>
            </Grid>
          </Paper>
        </Grid>
      </Container>
      {/* <UserContext.Provider value={ loggedinuserid}>
       <Authcheck></Authcheck>
      </UserContext.Provider> */}
    </Container>
    </Authcheck>
  );
  //const userloogedin=userstatus;
  //  export default userloogedin;
};

export default login;
