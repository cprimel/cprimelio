import React from 'react'
import { Link } from 'gatsby'
import { Spring } from 'react-spring/renderprops'
import NavPrimary from './NavPrimary'
import NavSocial from './NavSocial'

const Header = () => {
  return (
    <Spring
      items={{ duration: 2000 }}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {props => (
        <div style={props}>
          <header className="panel__cover">
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
              <div className="panel__overlay" />
            </div>
          </header>
        </div>
      )}
    </Spring>
  )
}

export default Header
