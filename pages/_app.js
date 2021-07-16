import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import 'bootstrap/dist/css/bootstrap.css'
import data from "../Sensordata.json";
import { useState, useEffect } from "react";
import '../styles/globals.css'

import { CookiesProvider } from "react-cookie"

import fire from "../config/fire-conf";

export const UserContext = React.createContext();




function MyApp({ Component, pageProps }) {
  const db = fire.database();
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);


  const user="taqi";
  //function for fetching data from firebase
   const [info2, setInfo2] = useState({});

   async function getdata() {
  
    const ref = db.ref().child("SENSORDATA/USERS");
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      setInfo2({ ...snapshot.val() });
      //console.log(data);
    });

    
   }
 

  //  useEffect(() => {
  //    getdata();
  //  }, []);

 //data.SENSORDATA.USERS
 //info2
//  const props={info:data.SENSORDATA.USERS,
//   user:"taqi"}
  return( 
  
    <React.Fragment>
    <Head>
      <title>My page</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
crossorigin="anonymous" 
/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
   
   
    </Head>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <CookiesProvider>
      <UserContext.Provider value={data.SENSORDATA.USERS}>
  <Component {...pageProps} />
  </UserContext.Provider>
  </CookiesProvider>
  </ThemeProvider>
    </React.Fragment>

  );
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
export default MyApp
