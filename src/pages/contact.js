import React from 'react'
import { Helmet } from 'react-helmet'
import Sidebar from '../components/Sidebar'

const ContactPage = () => {
  return (
    <>
      <Helmet title="cprimel.io | Contact" />
      <Sidebar />
      <div>
        <h1>Contact Page</h1>
        <p>info will appear here</p>
      </div>
    </>
  )
}

export default ContactPage
