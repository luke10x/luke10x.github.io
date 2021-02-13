import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import 'typeface-roboto';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  @media (max-width: 620px){
    flex-direction: column;
    align-items: center;
  }
  .titles {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-size: 3rem;
    margin: 0;
  }
  h2 {
    font-size: 1.25rem;
  }
  h3 {
    margin-top: 0;
    color: grey;
    text-transform: uppercase;
    font-size: 0.6rem;
  }
`



const StyledDiv = styled.div`
font-family: -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
font-size: 4em;

-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
`;

const LayoutUnstyled = ({ children, className}) => {
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
    <div className={className}>
      <Header>
        <div class="titles">
          <h1>LUKE 10X</h1>
          <h3>Fullstack developer &amp; code instructor</h3>
        </div>
      </Header>
      {children}
      <footer>
        <Link to="/">Home</Link> | <Link to="/blog">Blog</Link>
      </footer>
    </div>
  )
}

const Layout = styled(LayoutUnstyled)`
  * {
    font-family: 'CustomFont', Arial, sans-serif;
    font-weight:normal;
    font-style:normal;
    line-height: 1.6;
  }

  text-size-adjust: none;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -ms-text-size-adjust: none;

  @media (min-width: 1000px){
    width: 800px;
    margin: 0 auto;
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
