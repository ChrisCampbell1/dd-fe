// npm modules
import ContactForm from '../../components/ContactForm/ContactForm'

// components


// services


// styles
import styles from './Contact.module.css'

// component


export default function Contact() {
  return (
    <main className={styles.container}>
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Let's Chat!</h1>
      <h2 className="display-5 fw-normal lh-1 mb-3">Set up a free consultation today.</h2>
      <p className="lead fw-normal">Shoot me a message here or give me a call at 720-678-3060</p>
      <ContactForm />
    </main>
  )
}
