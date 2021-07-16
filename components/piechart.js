import { useState, useEffect } from "react";
import React from 'react'
import {Pie, defaults} from 'react-chartjs-2'
// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'
const piechart = (props) => {
  // console.log(props.info);
  const [chartData, setChartData] = useState({});
  // const [usergender, setUsergender] = useState([]);
  // const [noofusers, setNoofusers] = useState([]);

  const chart = () => {

    let usergender = [];
    let noofusers = [];
    let gender;
    let m=0,f=0;
    usergender.push("Male");
    usergender.push("Female");
    Object.keys(props.info).map(element => {
      gender=props.info[element].USERINFO.gender;
     
      if(gender=="Male")
      {
        m++;
        noofusers[0]=m;

      }
      else
      {
        f++;
        noofusers[1]=f;
      }
      
     


    })  
    setChartData({
      labels:usergender,
      datasets: [
        {
          label: "Gender wise user stat",
          data:noofusers,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
        }
      ]
    }); 
    // console.log(usergender);
    // console.log(noofusers);

  }


  useEffect(() => {
    chart();
  }, [props.info]);



    return (
        <div>
      <Pie
        data={chartData}
        height={300}
        width={300}
        options={{
          maintainAspectRatio: false,
          // scales: {
          //   yAxes: [
          //     {
          //       ticks: {
          //         beginAtZero: true,
          //       },
          //     },
          //   ],
          // },
        //   legend: {
        //     labels: {
        //       fontSize: 25,
        //     },
        //   },
        }}
      />
    </div>
      );
}
 
export default piechart;