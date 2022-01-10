import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components';
import '../assets/layout.css'

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
  h3 {
    margin-top: 0;
    color: grey;
    text-transform: uppercase;
    font-size: 0.6rem;
  }
`

const LayoutUnstyled = ({ children, className}) => {
  // useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

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
  @media (min-width: 1000px){
    width: 800px;
    margin: 0 auto;
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
