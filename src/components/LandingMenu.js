import React from 'react'
import { Link } from 'gatsby'
import NavPrimary from './NavPrimary'
import NavSocial from './NavSocial'

const LandingMenu = () => {
  return (
    <div className="panel__cover">
      <div className="panel">
        <div className="panel__inner">
          <div className="panel__content">
            <Link to="/about">
              <h1 className="panel__title">Casey Primel</h1>
            </Link>
            <hr className="panel__divider" />
            <p className="panel__description">Fullstack Developer</p>
            <hr className="panel__divider--secondary" />
            <div className="nav__wrapper">
              <NavPrimary />
              <NavSocial />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingMenu
