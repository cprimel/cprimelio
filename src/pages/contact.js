import React from 'react'
import PageLayout from '../components/layouts/PageLayout'
import ContactForm from '../components/ContactForm'

const ContactPage = ({ location }) => {
  return (
    <PageLayout location={location}>
      <div className="section-contact">
        <div className="section-contact__container">
          <h1 className="heading-primary">contact me</h1>
          <p className="section-contact__message">
            Are you looking for a full stack developer? Maybe you need a hand
            with an interesting project? Perhaps, you are interested in some of
            the projects on this website? Or, you just want to introduce
            yourself? Feel free to contact me using the form below.
            Alternatively, you can shoot me an email at&nbsp;
            <a href="mailto:casey.primel@gmail.com">casey.primel@gmail.com.</a>
          </p>
          <div className="section-contact__form-container">
            <ContactForm />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default ContactPage
