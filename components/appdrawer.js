import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useRouter } from 'next/router'
import PieChartIcon from '@material-ui/icons/PieChart';
import Logo from '../public/Logo.png'

import { Avatar } from '@material-ui/core';





const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        // backgroundColor:'#607d8b',
      },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
       
      },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      drawerPaper: {
        width: drawerWidth,
        // backgroundColor:'primary',
        // backgroundColor:'#607d8b',
        backgroundColor:'#20283E',
        color:'#f1f1f1',
      },
      toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  active:{
    backgroundColor:'#273457',
  },
  applycolor:{
    backgroundColor:'#f1f1f163',
  },
  logostyle:{
    height:'60px',
    width:'110px',
    borderRadius:'0px',
    margin: 'auto',
},

}));    


const appdrawer = () => {
    const classes = useStyles();
    const router = useRouter()
    const menuItems = [
        
      {
        text: 'Overview',
        icon:<CheckCircleIcon color="secondary"/>,
        path:'/adminpanel'
      },
      {
        text: 'Basics',
        icon:<CheckCircleIcon color="secondary"/>,
        path:'/adminpanel/overview'
      },
      {
            text: 'Active Sensors',
            icon:<CheckCircleIcon color="secondary"/>,
            path:'/adminpanel/activesensors'
        },
        {
            text: 'User Stats',
            icon:<PieChartIcon color="secondary"/>,
            path:'/adminpanel/users'
        },
        {
            
            text: 'Data Export',
            icon:<PieChartIcon color="secondary"/>,
            path:'/adminpanel/users'
        },
        
    ]
    return (   <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {/* <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography> */}
          
          
        </Toolbar>
      </AppBar>
       <Drawer
       className={classes.drawer}
       variant="permanent"
       classes={{
         paper: classes.drawerPaper,
       }}
       anchor="left"
      
     >
      <div className={classes.toolbar} >
        <Avatar className={classes.logostyle} alt="Remy Sharp" src={Logo} />
     </div>
    
        <Divider  className={classes.applycolor} />
        <List>
         {menuItems.map(item =>(
         <ListItem key={item.text} button
          onClick={()=>router.push(item.path)}
          className={router.pathname==item.path?classes.active:null}
         >
             <ListItemIcon>{item.icon}</ListItemIcon>
             <ListItemText primary={item.text}/>

         </ListItem>

         ))}
        </List>
        <Divider className={classes.applycolor} />
        
      </Drawer>
      </div>    
      );
}
 
export default appdrawer;