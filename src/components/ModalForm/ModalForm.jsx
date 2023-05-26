// npm modules
import { useState } from 'react'

// components


// services
import * as emailService from '../../services/emailService'


// styles
import styles from './ModalForm.module.css'

// component


export default function ModalForm({ handleCloseDownload }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subscribe: false,
    subject: 'Downloaded Tips Sheet',
    message: 'This client downloaded the tips sheet and subscribed to the newsletter',
  })

  const handleCheckboxChange = () => {
    setFormData({ ...formData, subscribe: !formData.subscribe })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleDownloadClick = () => {
    const el = document.getElementById('downloadGuide')
    el.click()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await emailService.sendEmail(formData)
    handleDownloadClick()
    handleCloseDownload()
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
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="phone"
            id="phone"
            onChange={handleChange}
            placeholder="Format: 123-456-7890"
          />
        </div>
        <div className={styles.inputContainerCheck}>
          <label htmlFor="subscribe">Subscribe</label>
          <input
            type="checkbox"
            name="subscribe"
            id="subscribe"
            onChange={handleCheckboxChange}
            required
          />
        </div>
        <button>Submit</button>
      </form>
      <a
        href='/test.png'
        download 
        id={'downloadGuide'}
        style={
          { display: 'none' }
        }
      >
        download
      </a>
    </>
  )
}
