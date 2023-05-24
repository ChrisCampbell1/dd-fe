// npm modules
import { useState } from 'react'

// components


// services


// styles
import styles from './ModalForm.module.css'

// component


export default function ModalForm({ handleClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subscribe: false,
  })

    const handleCheckboxChange = () => {
    setFormData({ ...formData, subscribe: !formData.subscribe })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    handleClose()
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
  )
}
