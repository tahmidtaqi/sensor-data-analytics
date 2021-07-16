import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Avatar, Card, CardContent, Container, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import LockIcon from "@material-ui/icons/Lock";
import { useState } from "react";
import "date-fns";
import Cookies from "js-cookie";
import axios from "axios";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useEffect } from "react";

import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
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
    //maxHeight: "100vh",
    maxWidth: 650,
    margin: "20px auto",
    padding: 40,
    //overflow: 'auto'
  },
  applycolor: {
    backgroundColor: "#20283E",
  },
  formControl: {
    margin: theme.spacing(3),
    minWidth: 180,
    maxWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Accelerometer",
  "GPS",
  "Orientation",
  "Gyroscope",
  "Magnetometer",
  "Gravity",
  "Light",
  "Battery level",
];

function getStyles(name, sensor, theme) {
  return {
    fontWeight:
    sensor.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const newprojectform = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [userid, setUserid] = useState(null);
  const [projectname, setProjectname] = useState("");

  const [orgname, setOrgname] = useState("");
  const [selectedDate1, setSelectedDate1] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());
  const [Error1, setError1] = useState(false);
  const [Error2, setError2] = useState(false);
  const [Error3, setError3] = useState(false);

  const [helperText1, sethelperText1] = useState("");
  const [helperText2, sethelperText2] = useState("");
  const [helperText3, sethelperText3] = useState("");
  const [participationnumber, setParticipationnumber] = useState("1");
  const [sensor, setSensor] = React.useState([]);

  const handleChange = (event) => {
    setSensor(event.target.value);
  };

  useEffect(() => {
    setUserid(Cookies.get("user"));
    console.log(userid);
  }, []);
  const handleDateChange = (date) => {
    setSelectedDate1(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };
  // const [age, setAge] = React.useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  // useEffect(() => {
  //   console.log(selectedDate1);
  // }, [selectedDate1]);

 
  const handleSubmit = (e) => {
    e.preventDefault();
    setError1(false);
    setError2(false);
    setError3(false);
    sethelperText1("");
    sethelperText2("");
    sethelperText3("");
    if (projectname == "") {
      setError1(true);

      sethelperText1("Please fill up the option");
    }
    if (orgname == "") {
      setError2(true);
      sethelperText2("Please fill up the option");
    }
    if (sensor== "") {
      setError3(true);
      sethelperText3("Please fill up the option");
    }
    console.log(projectname);
    console.log(orgname);
    console.log(participationnumber);
    console.log(sensor);

    if (projectname && orgname && userid) {
      axios
        .post("/api/createproject", {
          userid: userid,
          projectname: projectname,
          orgname: orgname,
          sensor : sensor,
          participationduration:participationnumber,
          Participation_Period_Start: selectedDate1,
          Participation_Period_End: selectedDate2,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <Grid>
        <Paper elevation={10} className={classes.cardstyle}>
          <Grid align="center">
            <Avatar className={classes.applycolor}>
              <LockIcon />
            </Avatar>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField
                onChange={(e) => setProjectname(e.target.value)}
                className={classes.field}
                fullWidth={true}
                id="standard-basic"
                label="Project Name"
                error={Error1}
                required
                helperText={helperText1}
              />

              <TextField
                onChange={(e) => setOrgname(e.target.value)}
                className={classes.field}
                fullWidth={true}
                id="standard-basic"
                label="Organization Name"
                error={Error2}
                required
                helperText={helperText2}
              />

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Study Period(from)"
                    value={selectedDate1}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />

                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Study Period(to)"
                    value={selectedDate2}
                    onChange={handleDateChange2}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>

              <TextField
                id="standard-number"
                fullWidth={true}
                onChange={(e) => setParticipationnumber(e.target.value)}
                className={classes.field}
                defaultValue="1"
                label="Participation Duration:"
                InputProps={{ inputProps: { min: 1 } }}
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />

              <FormControl required error={Error3}   className={classes.formControl}>
                <InputLabel id="demo-mutiple-name-label">Sensors</InputLabel>
                <Select
                  labelId="demo-mutiple-name-label"
                  id="demo-mutiple-name"
                  multiple
                  value={sensor}
                  onChange={handleChange}
                  input={<Input />}
                  MenuProps={MenuProps}
                  
                 
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, sensor, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>{helperText3}</FormHelperText>
              </FormControl>

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
    </div>
  );
};

export default newprojectform;
