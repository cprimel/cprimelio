import React from 'react'
import { Spring, animated } from 'react-spring/renderprops'
import HeaderImage from './HeaderImage'

const Header = ({ fromInternal = false }) => {
  return (
    <Spring
      items={{ duration: 8000 }}
      from={{ opacity: !fromInternal ? 0 : 1 }}
      to={{ opacity: 1 }}
    >
      {props => (
        <animated.div style={props} className="image-wrapper">
          <HeaderImage />
        </animated.div>
      )}
    </Spring>
  )
}

export default Header
