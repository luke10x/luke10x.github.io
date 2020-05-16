import React from "react"
import { Link } from "gatsby"
import Container from '@material-ui/core/Container';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import png from "../images/taxx-app.png"
import Grid from '@material-ui/core/Grid';

import "../components/layout.css"
import 'typeface-roboto'

import TaxxCard from '../components/taxx-card';
import AcademyCard from '../components/academy-card';
import PracticeCard from '../components/practice-card';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paper: {
    minWidth: 275,
    display: 'flex',
    flexWrap: 'wrap'

  },
});

const IndexPage = () => {

  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Home" />

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>

          <Grid item key="1" xs={12} sm={6} md={4}>
            <TaxxCard />
          </Grid>
          
          <Grid item key="2" xs={12} sm={6} md={4}>
            <AcademyCard />
          </Grid>

          <Grid item key="3" xs={12} sm={6} md={4}>
            <PracticeCard />
          </Grid>

        </Grid>
      </Container>

      {/*
      <Link to="/page-2/">Go to page 2</Link> | 
      <Link to="/album/">Go to album</Link> | 
      <Link to="/pricing/">Pricing</Link> | 
    */}
    </Layout>
  );
}


export default IndexPage
