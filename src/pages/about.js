import React from 'react'
import { Helmet } from 'react-helmet'
import Sidebar from '../components/Sidebar'
import profileImage from '../images/profile.jpg'

const AboutPage = () => {
  return (
    <>
      <Helmet title="cprimel.io | About" />
      <div className="section-about">
        <Sidebar />
        <div className="section-about__container">
          <div className="user-image">
            <img src={profileImage} className="user-image" alt="Casey Primel" />
          </div>
          <div className="section-about__text-container">
            <h1 className="heading-primary">about me</h1>
            <h2 className="heading-secondary">
              I&apos;m a full stack developer based in Boston working in
              JavaScript and Python.
            </h2>
            <p className="heading-tertiary">
              placeholder text so on and so forth placeholder text so on and so
              forth placeholder text so on and so forthplaceholder text so on
              and so forth placeholder text so on and so forth placeholder text
              so on and so forth placeholder text so on and so forthplaceholder
              text so on and so forth placeholder text so on and so forth
              placeholder text so on and so forth placeholder text so on and so
              forthplaceholder text so on and so forth placeholder text so on
              and so forth placeholder text so on and so forth placeholder text
              so on and so forthplaceholder text so on and so forth placeholder
              text so on and so forth placeholder text so on and so forth
              placeholder text so on and so forthplaceholder text so on and so
              forth
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
