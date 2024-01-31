"use client"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import ReCAPTCHA from "react-google-recaptcha"
import { Icon } from "./Elements/Icon"
import ScrollOffset from "./shared/ScrollOffset"

const Contact = () => {
  const formRef = useRef(null)
  const captchaRef = useRef(null)

  const [isVerified, setIsVerified] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formValue, setFormValue] = useState({
    user_name: "",
    user_email: "",
    contact_number: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const token = captchaRef.current.getValue()
    captchaRef.current.reset()

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      (result) => {
        setIsSubmitted(true)
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

  const onChange = (value) => {
    setIsVerified(true)
  }

  const { name, email, phone, message } = formValue

  const classesContainer =
    "flex flex-col items-center flex-wrap w-full mx-auto md:flex-row md:justify-center md:max-w-3xl lg:max-w-5xl"

  return (
    <section id="contact">
      <ScrollOffset>
        <div className={`${classesContainer} px-5 md:flex-col`}>
          <div className="text-center mb-8">
            <Icon icon="heroicons-solid:chat-alt-2" variant="section" />

            <h1 className="text-3xl leading-9 font-medium mb-4 sm:text-4xl sm:leading-10">
              Contact Me
            </h1>
            <p className="leading-6 mx-auto">
              Let's see if we're a match and work together.
            </p>
          </div>
          {isSubmitted ? (
            <div className="bg-gray-800 rounded p-4 mb-16 w-full max-w-xl text-center">
              <p>Thank you for contacting me!</p>
            </div>
          ) : (
            <form
              className="bg-gray-800 rounded p-4 mb-16 w-full max-w-xl"
              onSubmit={handleSubmit}
              ref={formRef}>
              <div className="mb-4">
                <label className="block mb-1" htmlFor="user_name">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="block w-full"
                  placeholder="Enter name"
                  required
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="block mb-1" htmlFor="user_email">
                  Email address
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="block w-full"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                  value={email}
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  I'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label className="block mb-1" htmlFor="contact_number">
                  Phone
                </label>
                <input
                  type="text"
                  name="contact_number"
                  className="block w-full"
                  placeholder="Enter phone"
                  value={phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="block mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="block w-full"
                  name="message"
                  id="message"
                  rows="3"
                  placeholder="Enter message"
                  required
                  value={message}
                  onChange={handleChange}></textarea>
              </div>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={onChange}
                ref={captchaRef}
              />
              <button
                type="submit"
                className="px-3 py-1 rounded border-[1px] border-transparent disabled:cursor-not-allowed disabled:border-gray-800 disabled:bg-gray-900 disabled:text-gray-700 hover:disabled:bg-gray-900 hover:disabled:text-gray-700 btn-primary"
                disabled={!isVerified}>
                Send
              </button>
            </form>
          )}
        </div>
      </ScrollOffset>
    </section>
  )
}

export default Contact
