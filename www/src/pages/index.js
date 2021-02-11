import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import 'typeface-roboto';

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      
      <p>
        Home index
      </p>

      <Link to="/blog/">Blog</Link> | 
    </Layout>
  );
}

export default IndexPage
