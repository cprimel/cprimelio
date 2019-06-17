import React from 'react'
import { Link } from 'gatsby'
import PageLayout from '../components/layouts/PageLayout'
import NavSocial from '../components/NavSocial'

const AboutPage = ({ location }) => {
  return (
    <PageLayout location={location}>
      <div className="section-about">
        <div className="section-about__container">
          <div className="section-about__text-container">
            <h1 className="section-about__title heading-primary">about me</h1>
            <h2 className="heading-secondary">
              Hi. I&apos;m Casey, a full stack developer based in Boston.
            </h2>
            <p className="text-content">
              I am interested in building scalable, user-centric applications
              for data-intensive environments whether tools for data
              visualization or complete data platforms. I enjoy any chance to
              tackle complex engineering problems and develop simple, intuitive
              solutions for them. I work primarily with the JavaScript and
              Python ecosystems but am also handy with Java, PHP, SQL and
              GraphQL. That being said, I am always game for expanding my
              toolkit with new languages and frameworks and value the insights
              garnered from working outside my comfort zone.
            </p>
            <p className="text-content">
              Feel free to&nbsp;
              <Link to="/contact">reach out</Link>
              &nbsp;with work opportunities, interesting side projects, or just
              to connect!
            </p>
            <NavSocial />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default AboutPage
