/* eslint-disable no-console */
import React, { Component } from 'react'
import { Link } from 'gatsby'

class NavPrimary extends Component {
  handlePortfolioClick(){
    console.log('Portfolio please!')
  }
  handleAboutClick(){
    console.log('About please!')
  }

  render() {
    return (
      <div>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link
                onClick={this.handlePortfolioClick}
                to="/latest"
                title="link to latest"
              >
                Latest
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                onClick={this.handlePortfolioClick}
                to="/portfolio"
                title="link to portfolio page"
              >
                Portfolio
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                onClick={this.handleAboutClick}
                to="/about"
                title="link to about page"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavPrimary