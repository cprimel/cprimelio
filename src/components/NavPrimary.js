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
        <nav className="cover-navigation cover-navigation--primary">
          <ul className="navigation">
            <li className="navigation__item">
              <Link
                onClick={this.handlePortfolioClick}
                to="/portfolio"
                title="link to portfolio page"
                className="portfolio-button"
              >
                Portfolio
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                onClick={this.handlePortfolioClick}
                to="/portfolio"
                title="link to portfolio page"
                className="portfolio-button"
              >
                Portfolio
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                onClick={this.handleAboutClick}
                to="/about"
                title="link to about page"
                className="about-button"
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