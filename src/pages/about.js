import React from 'react'
import Sidebar from '../components/Sidebar'
import profile_image from '../images/profile.jpg'

const AboutPage = () => {
  return (
    <div className="section-about">
      <Sidebar />
      <div className="section-about__container">
        <div className="user-image">
          <img
            src={profile_image}
            className="user-image"
            alt={'Casey Primel'}
          />
        </div>
        <div className="section-about__text-container">
          <h1 className="heading-primary">about me</h1>
          <h2 className="heading-secondary">
            I'm a full stack developer based in Boston.
          </h2>
          <h3 className="heading-tertiary">
            placeholder text so on and so forth placeholder text so on and so
            forth placeholder text so on and so forthplaceholder text so on and
            so forth placeholder text so on and so forth placeholder text so on and so
            forth placeholder text so on and so forthplaceholder text so on and
            so forth placeholder text so on and so forth placeholder text so on and so
            forth placeholder text so on and so forthplaceholder text so on and
            so forth placeholder text so on and so forth placeholder text so on and so
            forth placeholder text so on and so forthplaceholder text so on and
            so forth placeholder text so on and so forth placeholder text so on and so
            forth placeholder text so on and so forthplaceholder text so on and
            so forth
          </h3>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
