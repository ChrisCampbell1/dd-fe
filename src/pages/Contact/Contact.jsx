// npm modules
// import { useState } from 'react';

// components
import ContactForm from '../../components/ContactForm/ContactForm'
// import Modal from 'react-bootstrap/Modal'


// services


// styles
import styles from './Contact.module.css'

// component


export default function Contact({ setModalMessage, handleShow }) {
      //modal code
      // const [show, setShow] = useState(false);
      // const [modalMessage, setModalMessage] = useState('')

      // const handleClose = () => {
      //   setShow(false);
      //   setModalMessage('')
      // }
      // const handleShow = () => setShow(true);
      //modal code
  
  return (
    <main className={styles.container}>
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Let's Chat!</h1>
      <h2 className="display-5 fw-normal lh-1 mb-3">Set up a free consultation today.</h2>
      <p className="lead fw-normal">Shoot me a message here or give me a call at 720-678-3060</p>
      <ContactForm 
        setModalMessage={setModalMessage}
        handleShow={handleShow}
      />

      {/* <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}

      >
        <Modal.Header closeButton>
          <Modal.Title>Thanks for reaching out!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalMessage}</p>
        </Modal.Body>
      </Modal> */}
    </main>
  )
}
