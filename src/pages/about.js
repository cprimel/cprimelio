import React from 'react'
import { Helmet } from 'react-helmet'
import Sidebar from '../components/Sidebar'
import NavSocial from '../components/NavSocial'
import StreamGraph from '../components/StreamGraph'
import profileImage from '../images/profile.jpg'

const AboutPage = () => {
  return (
    <>
      <Helmet title="cprimel.io | About" />
      <div className="section-about__svg-container">
        <StreamGraph n={10} m={100} />
      </div>
      <div className="section-about">
        <Sidebar />
        <div className="section-about__container">
          <div className="section-about__sub-container-1">
            <div className="user-image__container">
              <img
                src={profileImage}
                className="user-image"
                alt="Casey Primel"
              />
            </div>
            <div className="section-about__text-container">
              <h1 className="section-about__title heading-primary">about me</h1>
              <h2 className="heading-secondary">
                I&apos;m a full stack developer based in Boston working in
                JavaScript and Python.
              </h2>
              <p className="text-content">
                Passionate about building simple, intuitive solutions for
                complex problems across the entire data workflow from data
                collection and visualization to user interaction and machine
                learning.
              </p>
              <NavSocial />
            </div>
          </div>
          {/* <div className="section-about__sub-container-2">
            <div className="section-about__svg-container">
              <StreamGraph n={10} m={100} width={600} height={600} />
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default AboutPage
