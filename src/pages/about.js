import React from 'react'
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
              I am primarily interested in building scalable, user-centric
              applications for data-intensive environments whether tools for
              data visualization or complete data platforms. That being said, I
              enjoy any chance to tackle complex engineering problems and
              develop simple, intuitive solutions for them.I work primarily with
              the JavaScript and Python ecosystems with a smattering of PHP,
              Java and whatever else is needed to get the job done (e.g.,
              GraphQL or SQL).
            </p>
            <p className="text-content">
              Feel free to reach out with work oppurtunities, interesting side
              projects, or just to connect!
            </p>
            <NavSocial />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default AboutPage
