import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import taxxPng from '../images/taxx-app.png'
import { cyan } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    flex: 1,
    minWidth: '200px'
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
  media: {
    height: '200px',
    backgroundColor: '#008080',
    backgroundPosition: 'center center',
    backgroundSize: '171px 181px'
  }
});

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">

        <CardMedia
          className={classes.media}
          image={taxxPng}
          title="TAXX application window on BeOS"
        />
        
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Research project
        </Typography>
        <Typography variant="h5" component="h2">
          TAXX
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Your personal task assistant
        </Typography>
        <Typography variant="body2" component="p">
          A web app that helps you keeps on top of your daily tasks and ideas.
          Besides of being a great productivity tool,
          it is created by 10X Developer,
          as a showcase of techniques and tools used in TAXX-Stack course.
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" href="https://taxx-spa.herokuapp.com" target="_blank">
          Go to the TAXX app
        </Button>
      </CardActions>
    </Card>
  );
}