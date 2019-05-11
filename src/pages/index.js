import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/SideBar';

const IndexPage = () => {
  return (
      <>
      <Header location={location.pathname}/>
      <Sidebar />
      </>
  )
}

export default IndexPage
