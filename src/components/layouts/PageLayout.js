import React from 'react'
import { Helmet } from 'react-helmet'
import { Spring, animated } from 'react-spring/renderprops'
import Header from '../Header'
import Sidebar from '../Sidebar'

const PageLayout = ({ children, location }) => {
  const isHome = location.pathname === '/'
  const isContent =
    location.pathname.startsWith('/projects/') ||
    location.pathname.startsWith('/updates/')
  const { fromHome } = location.state ? location.state : 'true'
  const fromInternal = location.state ? 'true' : 'false'

  let springFrom
  let springTo
  if (isHome) {
    springFrom = { transform: 'translate3d(0, 0%, 0)' }
    springTo = { transform: 'translate3d(0, 0%, 0)' }
  } else if (isContent) {
    springFrom = { transform: 'scale(0.8)' }
    springTo = { transform: 'scale(1)' }
  } else {
    springFrom = { transform: 'translate3d(100%, 0, 0)' }
    springTo = { transform: 'translate3d(0%, 0, 0)' }
  }

  return (
    <div>
      <Helmet
        title={`cprimel.io | ${
          isHome ? 'home' : location.pathname.split('/').slice(-1)[0]
        }`}
      />
      <Header location={location} fromInternal={fromInternal} />
      {!isHome && <Sidebar location={location} fromHome={fromHome} />}
      <Spring items={{ duration: 6000 }} from={springFrom} to={springTo}>
        {props => (
          <animated.div className="page__container" style={props}>
            {children}
          </animated.div>
        )}
      </Spring>
    </div>
  )
}

export default PageLayout
