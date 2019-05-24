import React from 'react'
import { Link } from 'gatsby'

const Sidebar = () => {
  return (
    <>
      <nav className="menu-sidebar">
        <ul className="menu-sidebar__list">
          <li className="menu-sidebar__item--primary">
            <Link
              className="sidebar__link"
              to="/"
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
              to="/latestupdates"
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
              to="/portfolio"
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
      </nav>
    </>
  )
}

export default Sidebar
