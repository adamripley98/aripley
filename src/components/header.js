import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from '../images/alogo.png'

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        padding: `1.45rem 1.0875rem 0 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <img className="logo" src={Logo} alt="logo" />
      </Link>
      {
        (window.location.pathname === "/" || window.location.pathname === "/home") ? (
          null
        ) : (
          <div className="nav-links">
            <Link
              to="/thoughts"
              className="nav-link"
              activeStyle={{ textDecoration: "underline" }}
            >
            THOUGHTS
            </Link>
            <Link
              to="/currently"
              className="nav-link"
              activeStyle={{ textDecoration: "underline" }}
            >
            CURRENTLY
            </Link>
            <Link
              to="/interests"
              className="nav-link"
              activeStyle={{ textDecoration: "underline" }}
            >
            INTERESTS
            </Link>
            <a className="nav-link" href="https://www.riplo.io/" target="_blank">FREELANCE</a>
            <a className="nav-link" href="mailto:aripley@wharton.upenn.edu">CONTACT</a>
          </div>
        )
      }
    </div>
    <div className="clear" />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
