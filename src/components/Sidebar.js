import React from 'react'
import { Link } from 'gatsby'
import { Spring, animated } from 'react-spring/renderprops'

const Sidebar = ({ fromHome = true }) => {
  return (
    <Spring
      items={{ duration: 1500 }}
      from={{
        transform: fromHome
          ? 'translate3d(-100%, 0, 0)'
          : 'translate3d(0%, 0, 0)',
      }}
      to={{ transform: 'translate3d(0%, 0, 0)' }}
    >
      {props => (
        <animated.nav className="menu-sidebar" style={props}>
          <ul className="menu-sidebar__list">
            <li className="menu-sidebar__item--primary">
              <Link
                className="sidebar__link"
                to="/"
                state={{ fromHome: false }}
                title="link to home page"
                activeClassName="active"
              >
                <div className="container">
                  <i className="icon icon--sidebar icon-home" />
                  <div className="overlay">
                    <span className="container__text">Home</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="menu-sidebar__item--primary">
              <Link
                className="sidebar__link"
                to="/about"
                state={{ fromHome: false }}
                title="link to about page"
                activeClassName="active"
              >
                <div className="container">
                  <i className="icon icon--sidebar icon-torso" />
                  <div className="overlay">
                    <span className="container__text">About</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="menu-sidebar__item--primary">
              <Link
                className="sidebar__link"
                to="/updates"
                state={{ fromHome: false }}
                title="link to latest page"
                activeClassName="active"
                partiallyActive
              >
                <div className="container">
                  <i className="icon icon--sidebar icon-list-thumbnail" />
                  <div className="overlay">
                    <span className="container__text">Latest</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="menu-sidebar__item--primary">
              <Link
                className="sidebar__link"
                to="/projects"
                state={{ fromHome: false }}
                title="link to portfolio page"
                activeClassName="active"
                partiallyActive
              >
                <div className="container">
                  <i className="icon icon--sidebar icon-folder" />
                  <div className="overlay">
                    <span className="container__text">Portfolio</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="menu-sidebar__item--primary">
              <Link
                className="sidebar__link"
                to="/contact"
                state={{ fromHome: false }}
                title="link to contact page"
                activeClassName="active"
              >
                <div className="container">
                  <i className="icon icon--sidebar icon-mail" />
                  <div className="overlay">
                    <span className="container__text">Contact</span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
          <ul className="menu-sidebar__social" />
        </animated.nav>
      )}
    </Spring>
  )
}

export default Sidebar
