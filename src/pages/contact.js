import React from 'react'
import { Helmet } from 'react-helmet'
import Sidebar from '../components/Sidebar';

const ContactPge = () => {
  return (
    <>
    <Helmet title="cprimel.io | Contact" />
    <Sidebar />
    <div>
      <h1>Latest Updates</h1>
      <p>posts will appear here</p>
    </div>
    </>
  )
}

export default ContactPage