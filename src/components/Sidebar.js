import React from 'react'
import { Link } from 'gatsby'

const Sidebar = () => {
  return (
    <>
      <nav className="menu-sidebar">
        <ul className="menu-sidebar__list">
          <li className="menu-sidebar__item--primary">
            <Link to="/" title="link to home page">
              <div className="container">
                <i className="icon icon--sidebar icon-home" />
                <div className="overlay">
                  <span className="container__text">Home</span>
                </div>
              </div>
            </Link>
          </li>
          <li className="menu-sidebar__item--primary">
            <Link to="/about" title="link to about page">
              <div className="container">
                <i className="icon icon--sidebar icon-torso" />
                <div className="overlay">
                  <span className="container__text">About</span>
                </div>
              </div>
            </Link>
          </li>
          <li className="menu-sidebar__item--primary">
            <Link to="/portfolio" title="link to portfolio page">
              <div className="container">
                <i className="icon icon--sidebar icon-folder" />
                <div className="overlay">
                  <span className="container__text">Portfolio</span>
                </div>
              </div>
            </Link>
          </li>
          <li className="menu-sidebar__item--primary">
            <Link to="/contact" title="link to contact page">
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
      </nav>
    </>
  )
}

export default Sidebar
