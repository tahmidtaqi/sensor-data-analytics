import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";


import { useState, useEffect } from "react";
import Authcheck from '../components/authcheck'
const columns = [
  { field: "id", headerName: "ID", width:70 },
  { field: "Userid", headerName: "User ID", width: 150 },
  {
    field: "GPS",
    headerName: "GPS",
    width: 80,

    valueGetter: (params) => {
      if (params.value == "active") {
        return "🟢";
      } else {
        return "🔴";
      }
    },
  },
  { field: "acc", headerName: "Accelerometer", width: 130,
  valueGetter: (params) => {
    if (params.value == "active") {
      return "🟢";
    } else {
      return "🔴";
    }
  },
  


},
  {
    field: "ori",
    headerName: "Orientation",
    width: 130,
    valueGetter: (params) => {
      if (params.value == "active") {
        return "🟢";
      } else {
        return "🔴";
      }
    },
  },
  { field: "datetime", headerName: "Last Data Recorded", width: 180 },
];

let rows = [];
let i = 0;
let lastkey;
let gpsstate, accstate, oristate;

const datable = (props) => {
  const [row, setRow] = useState([]);
  const { info } = props;
  function rowrendering() {
    //rows = [];
    i = 0;
    Object.keys(props.info).map((element) => {
      //console.log({element});
      (gpsstate = "inactive"), (accstate = "inactive"), (oristate = "inactive");
      if (props.info[element].SENSORDATA) {
        //console.log(props.info[element].SENSORDATA)
        lastkey = Object.keys(props.info[element].SENSORDATA)[
          Object.keys(props.info[element].SENSORDATA).length - 1
        ];

        //Fri Apr 16 2021 14:38:37 GMT+0600 (Bangladesh Standard Time)
        var d1 = new Date(props.info[element].SENSORDATA[lastkey].Date_time);

        //console.log(d);
        var n = d1.getTime();
        var d2 = new Date();
        var n2 = d2.getTime();
        if (n2 - n <= 7200000) {
          accstate = "active";
          oristate = "active";
          if (props.info[element].SENSORDATA[lastkey].SENSORGPS_LATITUDE != 0) {
            gpsstate = "active";
          }
        }

        rows[i++] = {
          id: i,
          Userid: element,
          GPS: gpsstate,
          acc: accstate,
          ori: oristate,
          //ori: ()=>{return (<span><Brightness1Icon/></span>)} ,
          datetime: props.info[element].SENSORDATA[lastkey].Date_time,
        };
      } else {
        rows[i++] = {
          id: i,
          Userid: element,
          GPS: gpsstate,
          acc: accstate,
          ori: oristate,
          datetime: 'None',
        };
      }
    });

    return rows;
  }

  useEffect(() => {
    let v = rowrendering();

    setRow([...v]);
  }, [info]);

  // useEffect(() => {
  //   console.log(row);
  // }, [row]);

  return (
  
    <div style={{ height: 800, width: "100%" }}>
      <DataGrid rows={row} columns={columns} pageSize={100}  />
    </div>
    
  );
};

export default datable;
