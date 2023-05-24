// npm modules
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal'

// components
import HeroVideo from '../../components/HeroVideo/HeroVideo'
import ContactForm from '../../components/ContactForm/ContactForm'
import ModalForm from '../../components/ModalForm/ModalForm'

// services


// styles and assets
import styles from './Landing2.module.css'
// import chris from '../../assets/chris.png'
import video from '../../assets/placeholder.mp4'

const Landing = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <main className={styles.container}>
      <HeroVideo />

      <div className={styles.about}>
        <h2 className="text-body-emphasis">Real Estate Websites Done Right<br/>For Agents, By An Agent</h2>
        <video width='700' controls>
          <source src={video} type="video/mp4" />
        </video>

      </div>
      <div className={styles.servicesTitle}>
        <h2>Services</h2>
      </div>
      <div className={styles.services}>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className={styles.serviceCarousel}
          variant='dark'
          touch={true}
          indicators={false}
        >
          <Carousel.Item>
            <div className={styles.white}>
            </div>
            <Carousel.Caption className={styles.caption}>
              <h3>Web Development</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit necessitatibus officiis fuga aspernatur eos odio officia, voluptas totam corporis consequuntur veritatis ullam at maxime non cupiditate in saepe nisi voluptates!</p>
              <Link>Learn More</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.white}>
            </div>
            <Carousel.Caption className={styles.caption}>
              <h3>Lead Capture</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit necessitatibus officiis fuga aspernatur eos odio officia, voluptas totam corporis consequuntur veritatis ullam at maxime non cupiditate in saepe nisi voluptates!</p>
              <Link>Learn More</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.white}>
            </div>
            <Carousel.Caption className={styles.caption}>
              <h3>Lead Generation</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit necessitatibus officiis fuga aspernatur eos odio officia, voluptas totam corporis consequuntur veritatis ullam at maxime non cupiditate in saepe nisi voluptates!</p>
              <Link>Learn More</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.white}>
            </div>
            <Carousel.Caption className={styles.caption}>
              <h3>Branding</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit necessitatibus officiis fuga aspernatur eos odio officia, voluptas totam corporis consequuntur veritatis ullam at maxime non cupiditate in saepe nisi voluptates!</p>
              <Link>Learn More</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.white}>
            </div>
            <Carousel.Caption className={styles.caption}>
              <h3>Business Consulting</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit necessitatibus officiis fuga aspernatur eos odio officia, voluptas totam corporis consequuntur veritatis ullam at maxime non cupiditate in saepe nisi voluptates!</p>
              <Link>Learn More</Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="my-5">
        <div className="p-1 text-center bg-body-tertiary">
          <div className="container py-1">
            <h2 className="text-body-emphasis">10 Tips For Building Your Own Website</h2>
            <p className="col-lg-8 mx-auto lead">
              I put this guide together for people who are on the fence about creating their own website. Here are some free tips if you decide to go the DIY route.
            </p>
            <button type='button' onClick={handleShow}>Download</button>
          </div>
        </div>
      </div>
      <h2 className="mt-3 text-body-emphasis">Let's Work Together</h2>
        <ContactForm />

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}

      >
        <Modal.Header closeButton>
          <Modal.Title>Provide Contact Info to Download</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalForm handleClose={handleClose}/>
        </Modal.Body>
      </Modal>
    </main>
  )
}

export default Landing
