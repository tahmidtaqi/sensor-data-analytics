import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
 import Logo from '../public/Static/Logo.png';
import { Avatar } from '@material-ui/core';
import Image from 'next/image';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logostyle:{
      height:'60px',
      width:'110px',
      borderRadius:'0px'
  },
  fontstyle:{
      fontFamily:'Poppins',
      '&:hover':{
        backgroundColor:'#fff',
        color:'#000'
      }, 
  },
//   hoverstyle:{
//    '&:hover':{
//        backgroundColor:'#fff',
//        color:'#000'

//    },
 // }
}));

const navbar = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
        <AppBar position="fixed">
       
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" className={classes.title}>
          
             <Avatar className={classes.logostyle} alt="Remy Sharp" src={Logo} /> 
             
           {/* <Image src={Logo} alt="" height="64px" width="200px"/>  */}
            </Typography>
            

            <Button href='/' className={classes.fontstyle}  color="inherit">Home</Button>
            <Button className={classes.fontstyle} color="inherit">About Us</Button>
            <Button href='/login' className={classes.fontstyle} color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
     );
}
 
export default navbar;