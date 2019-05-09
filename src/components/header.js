import React from 'react'
import { Link } from 'gatsby'
import NavPrimary from './NavPrimary'
import profile_image from '../images/profile.jpg'
import NavSocial from './NavSocial'

const Header = ({ location }) => {

    return (
      <header className="panel__cover">
          <div className={(location === '/' ? "panel" : "panel--collapsed")
          }>
            <div className="panel__inner">
              <div className="panel__content">
                <Link to="/">
                  <img
                    src={profile_image}
                    className="user-image"
                    alt={'Casey Primel'}
                  />
                  <h1 className="panel__title">
                    Casey Primel
                  </h1>
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
            <div className="panel__overlay" />
          </div>
      </header>
    )
  }

export default Header
