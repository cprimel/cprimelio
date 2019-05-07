import React from 'react'
import { Link } from 'gatsby'
import NavPrimary from './NavPrimary'
import profile_image from '../images/profile.jpg'
import NavSocial from './NavSocial'

const Header = ({ location }) => {

    return (
      <header className="panel-cover">
          <div className={(location === '/' ? "panel-main" : "panel-main__collapsed")
          }>
            <div className="panel-main__inner panel-inverted">
              <div className="panel-main__content">
                <Link to="/">
                  <img
                    src={profile_image}
                    className="user-image"
                    alt={'Casey Primel'}
                  />
                  <h1 className="panel-cover__title panel-title">
                    Casey Primel
                  </h1>
                </Link>
                <hr className="panel-cover__divider" />
                <p className="panel-cover__description">Fullstack developer</p>
                <hr className="panel-cover__divider panel-cover__divider--secondary" />
                <div className="navigation-wrapper.visible">
                  <NavPrimary />
                  <NavSocial />
                </div>
              </div>
            </div>
            <div className="panel-cover--overlay" />
          </div>
      </header>
    )
  }

export default Header
