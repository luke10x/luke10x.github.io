import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import businessImg from '../images/business-2717066_640.jpg'

const useStyles = makeStyles({
  root: {
    flex: 1,
    minWidth: '200px',
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
  }
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">

        <CardMedia
          className={classes.media}
          image={businessImg}
          title="TAXX application window on BeOS"
        />
        
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Training courses
        </Typography>
        <Typography variant="h5" component="h2">
          10X Developer
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Code Academy
        </Typography>
        <Typography variant="body2" component="p">
          Lift your coding skills into new levels.
          Take a course of advanced full-stack development.
          Nowhere else you can find such complete real-life example based coding course.
        </Typography>
        <Typography variant="body2" component="p">
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" href="https://10x-developer-academy.teachable.com/" target="_blank">
          Enroll TAXX-Stack Course
        </Button>
      </CardActions>
    </Card>
  );
}