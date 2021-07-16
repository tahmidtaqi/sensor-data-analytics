import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Navbar from '../components/navbar';
import Image from 'next/image';
import Logo from '../public/Static/Logo.png';
import Carousel from '../components/homepageComponents/carousel'
import Cards from '../components/homepageComponents/cards'
import Footer from '../components/homepageComponents/footer'
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>({
  toolbar: theme.mixins.toolbar,
}));
export default function Home() {
  const classes = useStyles();
  
  return (
    
   <div>
     <Navbar></Navbar>
     <div className={classes.toolbar} />
     <Carousel></Carousel>
     <Cards></Cards>
     <Footer></Footer>
     
   </div>
  )
}
