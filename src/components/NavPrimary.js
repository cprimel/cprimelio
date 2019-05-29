import React from 'react'
import { Link } from 'gatsby'

const NavPrimary = () => {
  return (
    <div>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/updates" title="link to latest updates">
              Latest
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/projects" title="link to portfolio page">
              Portfolio
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/about" title="link to about page">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavPrimary
