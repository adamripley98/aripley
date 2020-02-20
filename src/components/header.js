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
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
