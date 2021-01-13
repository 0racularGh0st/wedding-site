/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import "./layout.scss"

const Layout = ({ children }) => {
  useEffect(()=>{
    let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  })
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
      <div>
        <main>{children}</main>
        <footer className="layout-footer">
          <p>
          Designed and Built
          </p>
          <p>by</p>
          <a href="https://nigeldavid.in" target="_blank" rel="noopener noreferrer" aria-label="nigel david">
          <div className="developed-by">
          <p>Nigel David Tariang</p>
          <ExitToAppIcon/>
          </div>
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
