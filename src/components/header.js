import React from 'react'
import { Spring } from 'react-spring/renderprops'
import HeaderImage from './HeaderImage'

const Header = ({ fromInternal = false }) => {
  return (
    <Spring
      items={{ duration: 8000 }}
      from={{ opacity: !fromInternal ? 0 : 1 }}
      to={{ opacity: 1 }}
    >
      {props => (
        <div style={props} className="image-wrapper">
          <HeaderImage />
        </div>
      )}
    </Spring>
  )
}

export default Header
