import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modalbutton from '../overviewcomponents/modalbutton'

const useStyles = makeStyles({
    root: {
      minWidth: 300,
      margin:'30px',
      padding: '20px',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
const overviewcards = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}variant="outlined">
      <CardContent>
        
        <Typography variant="h5" component="h2">
          Create a new project
        </Typography>
        
        
        
      </CardContent>
      <CardActions>
       <Modalbutton></Modalbutton>
      </CardActions>
    </Card>
    );
};

export default overviewcards;