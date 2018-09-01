import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div>
      <p>
        In assosication with Gabriel Rosa Studios
        and the mind of Gabriel Rosa,
        Gabriel Rosa presents:
      </p>
      <h1>
        <Link
          to="/"
        >
          Gabriel Rosa
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
