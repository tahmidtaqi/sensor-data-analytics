import { useState, useEffect } from "react";
import React from 'react'
import {Pie, defaults} from 'react-chartjs-2'



const agepiechart = (props) => {
    const [chartData, setChartData] = useState({});
    // const [usergender, setUsergender] = useState([]);
    // const [noofusers, setNoofusers] = useState([]);
  
    const chart = () => {
  
      let userage = [];
      let noofusers = [];
      let age;
      let m=0,f=0;
      userage.push("15-20");
      userage.push("21-25");
      userage.push("25+");
      noofusers[0]=0;
      noofusers[1]=0;
      noofusers[2]=0;
      Object.keys(props.info).map(element => {
        age=props.info[element].USERINFO.age;
       
        // if(age=="Male")
        // {
        //   m++;
        //   noofusers[0]=m;
  
        // }
        // else
        // {
        //   f++;
        //   noofusers[1]=f;
        // }

     if(age=="15-20") 
     {
         m=0;
         noofusers[m]=  noofusers[m]+1;
     }  
     else if(age=="21-25") 
     {
         m=1;
         noofusers[m]=  noofusers[m]+1;
     }
     else  if(age=="25+") 
     {
         m=2;
         noofusers[m]=  noofusers[m]+1;
     } 
     
  
  
      })  
     console.log(userage);
      console.log(noofusers);
      setChartData({
        labels:userage,
        datasets: [
          {
            label: "Gender wise user stat",
            data:noofusers,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            //   'rgba(75, 192, 192, 0.2)',
            //   'rgba(153, 102, 255, 0.2)',
            //   'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          }
        ]
      }); 
    
  
    }
  
  
    useEffect(() => {
      chart();
    }, [props.info]);
    return ( <div>
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
      </div> );
}
 
export default agepiechart;