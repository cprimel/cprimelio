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
              <i className="icon icon-torso" />
              <span className="menu-sidebar__text">About</span>
            </Link>
          </li>
          <li className="menu-sidebar__item--primary">
            <Link to="/portfolio" title="link to portfolio page">
              <i className="icon icon-folder" />
              <span className="menu-sidebar__text">Portfolio</span>
            </Link>
          </li>
          <li className="menu-sidebar__item--primary">
            <Link to="/contact" title="link to contact page">
              <i className="icon icon-mail" />
              <span className="menu-sidebar__text">Contact</span>
            </Link>
          </li>
        </ul>
        <ul className="menu-sidebar__social" />
      </nav>
    </>
  )
}

export default Sidebar
