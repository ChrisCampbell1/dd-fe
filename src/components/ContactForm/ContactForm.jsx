// npm modules
import { useState } from 'react'

// components


// services


// styles
import styles from './ContactForm.module.css'

// component


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    // e.preventDefault()
    // await reviewService.createReview(formData)
    // navigate('/reviews')
  }
  
  return (
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
    </form>
  )
}
