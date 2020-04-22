import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../components/layout.css"
import 'typeface-roboto'
import MainFeaturedPost from "../components/MainFeaturedPost"


const mainFeaturedPost = {
  title: 'There is nothing...',
  description:
    "...so far",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'TAXX - software to be on top of your tasks',
  linkUrl: 'fsfds'
};
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <MainFeaturedPost post={mainFeaturedPost} />
    <p>Under construction</p>

    {/*
    <Link to="/page-2/">Go to page 2</Link> | 
    <Link to="/album/">Go to album</Link> | 
    <Link to="/pricing/">Pricing</Link> | 
    */}
  </Layout>
)

export default IndexPage
