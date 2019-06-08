import React from 'react'
import PageLayout from '../components/layouts/PageLayout'
import LandingMenu from '../components/LandingMenu'

const LandingPage = ({ location }) => {
  return (
    <PageLayout location={location}>
      <LandingMenu />
    </PageLayout>
  )
}

export default LandingPage