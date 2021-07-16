import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import styles from '../styles/sidenav.module.css'
import FlareIcon from '@material-ui/icons/Flare';
import Link from 'next/link';


import { useContext } from "react";
import { useState, useEffect } from "react";
const Sidenav = () => {
    
  

  return (
    <div>
  <div className= "flex-column" className={styles.sidenav}>
    <a className={styles.sidenava}> <FlareIcon/>Overview</a>
  <Link href="/adminpanel/activesensors">
 
   <a className={styles.sidenava}> <FlareIcon/>Active Sensors</a> 
   </Link>
   <Link href="/adminpanel/users">
  <a className={styles.sidenava} href="#services">Users</a>
  </Link>
  <a className={styles.sidenava} href="#clients">Profile</a>
  <a className={styles.sidenava} href="#contact">Log out</a>
</div>


</div>
  );
      
}
 
export default Sidenav;