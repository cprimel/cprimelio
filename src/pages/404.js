import React from 'react'
import PageLayout from '../components/layouts/PageLayout'

const NotFoundPage = ({ location }) => (
  <>
    <PageLayout location={location}>
      <div className="page-404">
        <div className="page-404__container">
          <h2 className="heading-primary page-404__text">
            Page not found. Please use the sidebar menu (&larr;) to navigate to a valid url.
          </h2>
        </div>
      </div>
    </PageLayout>
  </>
)

export default NotFoundPage
