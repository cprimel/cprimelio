import React from 'react'

const NavSocial = () => (
  <div>
    <nav className="cover-navigation navigation--social">
      <ul className="navigation">
        <li className="navigation-social__item">
          <a
            href="https://www.github.com/cprimel"
            title="cprimel on GitHub"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="icon icon-social-github" />
          </a>
        </li>
        <li className="navigation-social__item">
          <a
            href="http://www.linkedin.com/in/cprimel"
            title="cprimel on LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="icon icon-social-linkedin" />
          </a>
        </li>
        <li className="navigation-social__item">
          <a
            href="mailto: casey.primel@gmail.com"
            title="email casey.primel@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="icon icon-mail" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
)

export default NavSocial
