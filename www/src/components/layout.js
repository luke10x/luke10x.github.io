import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import 'typeface-roboto';
import styled from 'styled-components';

const StyledDiv = styled.div`
font-family: -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
font-size: 4em;

-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <header>
        {data.site.siteMetadata.title}

        <StyledDiv>
          Full Stack!
        </StyledDiv>
      </header>
      <main>{children}</main>
      <footer>
        <Link to="/">Home</Link> | <Link to="/blog">Blog</Link>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
