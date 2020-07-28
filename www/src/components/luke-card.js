import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import lukeImg from '../images/luke-avatar.png'

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
          image={lukeImg}
          title="Luke 10x"
        />
        
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Practice
        </Typography> */}
        <Typography variant="h5" component="h2">
          LUKE 10X
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Typescript/Node.js/React + Java
        </Typography>
        <Typography variant="body2" component="p">
          Hello, Welcome to this website.
        </Typography>
        <Typography variant="body2" component="p">
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" href="https://www.youtube.com/channel/UCs_0IjH05wHXhmk12RyWxeQ" target="_blank">
          Check out my channel
        </Button>
      </CardActions>
    </Card>
  );
}