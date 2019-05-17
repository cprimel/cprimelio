import React from 'react'
import { Helmet } from 'react-helmet'
import Sidebar from '../components/Sidebar'
import ProjectBoard from '../components/ProjectBoard';

const PortfolioPage = () => {
  return (
      <>
      <Helmet title="cprimel.io | Portfolio" />
      <Sidebar />
      <ProjectBoard />
      </>
  )
}

export default PortfolioPage
