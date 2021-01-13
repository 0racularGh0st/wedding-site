import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => { 
  const logo = useStaticQuery(graphql`
  query {
    image: file(relativePath: { eq: "wedding-logo.png" }) {
      childImageSharp {
        fixed{
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)
  return(
  <header>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={logo.image.childImageSharp.fixed.src} height="40" width="40" alt="logo" aria-label="my-logo" style={{marginBottom:"0"}}/>
        </Link>
      </h1>
    </div>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
