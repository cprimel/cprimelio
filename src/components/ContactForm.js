import React from 'react'
import { navigateTo } from 'gatsby'
import isEmail from 'validator/lib/isEmail'

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

// Why a class? useState hook does not (yet) take callback fn as an arg and useEffect would result in unnecessary re-renders.
class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', message: '', formIsValid: false }
  }

  handleChange = e => {
    e.preventDefault(e)
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => this.handleValidation()
    )
  }

  handleValidation = () => {
    if (isEmail(this.state.email) && this.state.name && this.state.message) {
      this.setState({ formIsValid: true })
    } else {
      this.setState({ formIsValid: false })
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    const form = e.target
    fetch('/', {
      method: 'Post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      // eslint-disable-next-line no-alert
      .catch(error => alert(error))
  }

  render() {
    return (
      <>
        <form
          action="/"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <input name="bot-field" onChange={this.handleChange} />
          </div>

          <div className="form">
            <div className="form__item">
              <label htmlFor="name" className="form__label">
                <input
                  className="form__input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={this.handleChange}
                  required
                />
                <span>Name</span>
              </label>
              <br />
            </div>
            <div className="form__item">
              <label htmlFor="email" className="form__label">
                <input
                  className="form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  required
                />
                <span>Email</span>
              </label>
              <br />
            </div>

            <div className="form__item">
              <div className="text-area__container">
                <label htmlFor="message" className="form__label">
                  <textarea
                    className="form__input form__input--message"
                    name="message"
                    onChange={this.handleChange}
                    placeholder="Message"
                    required
                  />
                  <span>Message</span>
                </label>
              </div>
            </div>
            <br />
            <div className="form__item">
              <input
                className="btn form__btn"
                type="submit"
                value="Send"
                disabled={!this.state.formIsValid}
              />
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default ContactForm
