import React from 'react'
import { Link } from 'gatsby'
import PageLayout from '../components/layouts/PageLayout'

const NotFoundPage = ({ location }) => (
  <>
    <PageLayout location={location}>
      <div className="page-404">
        <div className="page-404__container">
          <h2 className="page-404__text heading-primary">
            Page not found. Please use the sidebar menu (&larr;) to navigate to
            a valid url. Or click&nbsp;
            <Link to="/">here</Link>
            &nbsp;to return to the landing page.
          </h2>
        </div>
      </div>
    </PageLayout>
  </>
)

export default NotFoundPage
