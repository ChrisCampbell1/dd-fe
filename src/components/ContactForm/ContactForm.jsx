// npm modules
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

// components
import Modal from 'react-bootstrap/Modal'

// services
import * as emailService from '../../services/emailService'

// styles
import styles from './ContactForm.module.css'

// component


export default function ContactForm({ setModalMessage, handleShow }) {
    //modal code
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // let modalMessage = ''
    //modal code
  
  const location = useLocation()
  const sub = location.state

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: sub ? `${sub} Inquiry` : '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await emailService.sendEmail(formData)
    // const res = await emailService.sendEmail(formData)
    // console.log(typeof res)
    // if (Response.status === 200){
    //   setModalMessage("Thanks for reaching out! I'll be in touch as soon as possible. For urgent inqueries you can call me at 720-678-3060.")
    // } else {
    //   setModalMessage("There was an error with the email server. Please give me a call or text at 720-678-3060")
    // }
    setModalMessage("I'll be in touch as soon as possible. For urgent inqueries you can call me at 720-678-3060.")
    handleShow()
    //200 is success 400 is failure res.status
    e.target.reset()
  }




  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={styles.container}
      >
        <div className={styles.inputContainer}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            // minLength="10"
            // maxLength="10"
            name="phone"
            id="phone"
            onChange={handleChange}
          />
          <div className={styles.inputContainer}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              onChange={handleChange}
              value={formData.subject}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="6"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button>Send</button>
        {/* <button type='button' onClick={() => handleShow()}>modal</button> */}
      </form>


    </>


  )
}
