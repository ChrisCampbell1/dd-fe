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
import video from '../../assets/ddintro.mp4'

const Landing = ({ setModalMessage, handleShow }) => {
  //download modal
  const [showDownload, setShowDownload] = useState(false);
  const handleCloseDownload = () => setShowDownload(false);
  const handleShowDownload = () => setShowDownload(true);
  //contact modal

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <main className={styles.container}>
      <HeroVideo />

      {/* <div className={styles.divider}></div> */}

      <div className={styles.hero + " " + "position-relative overflow-hidden p-3 p-md-5  text-center bg-body-tertiary"} >
        <div className="row flex-lg-row align-items-center g-5 py-5">
          {/* <div className="col-10 col-sm-8 col-lg-6"> */}
          <div className="col-lg-6">
            <video
              controls
              muted
              autoPlay
              className={styles.video}
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="col-lg-6">
            {/* <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Branding</h1> */}
            <p className="lead">Hi there, nice to meet you! I'm Chris, an award winning Realtor turned web developer with over a decade of sales and marketing experience. I've worked for multiple brokerages and always felt like there was something missing from the online marketing tools available to me. I started Dev Daddy Digital to help real estate agents like you build the digital tools and branding that they need at an affordable price.</p>
            <p className='lead'>Most agents I speak with agree that having a strong online brand is key to their success and generating new business but feel stuck with tools that are either inadequate or too complicated to use. My custom websites have the features and customization agents needs with an easy to use interface to manage your content. Don't feel like updating the content on your site? You can also hire me for monthly updates.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to={`/pricing`}>Explore Services</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>


      {/* <div className={styles.about}>
        <video width='700' controls>
          <source src={video} type="video/mp4" />
        </video>
      </div> */}
      <div className={styles.servicesTitle}>
        <h2 className="text-body-emphasis">Services</h2>
      </div>
      <div className={styles.services}>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className={styles.serviceCarousel}
          variant='dark'
          touch={true}
          indicators={false}
          pause='hover'
        >
          <Carousel.Item>
            <div className={styles.white}>
            </div>
            <Carousel.Caption className={styles.caption}>
              <h3>Web Design</h3>
              <ul>
                <li>Beautiful websites built with modern frameworks and responsive mobile designs</li>
                <li>SEO and lead generation best practices built into every page</li>
                <li>Easily create your own neighborhood-specific landing pages</li>
                <li>Show off who you are as an agent</li>
                <li>Intuitive features that you can use to update content</li>
              </ul>
              <Link to={`/services`}>Learn More</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.white}>
            </div>
            <Carousel.Caption className={styles.caption}>
              <h3>Lead Capture</h3>
              <ul>
                <li>Sites that give leads a reason to share their contact information with you</li>
                <li>Custom CRM and marketing tool integrations available to keep track of new leads</li>
                <li>Google Analytics to track web traffic trends</li>
              </ul>
              <Link to={`/services`}>Learn More</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.white}>
            </div>
            <Carousel.Caption className={styles.caption}>
              <h3>Lead Generation</h3>
              <ul>
                <li>Easily connect your new website to Google Ads to start generating pay per click traffic</li>
                <li>Custom landing pages for your ads to track conversion and generate more leads</li>
                <li>Run your own Google Ads campaigns without markups and hidden costs</li>
                <li>Retain me to manage your Google Ads account</li>
              </ul>
              <Link to={`/services`}>Learn More</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.white}>
            </div>
            <Carousel.Caption className={styles.caption}>
              <h3>Branding</h3>
              <ul>
                <li>Logo and brand identity development</li>
                <li>Bring your new online brand into the real world</li>
                <li>Custom marketing pieces that match your new brand</li>
                <li>Branded social media templates so incorporate your brand into your social channels</li>
              </ul>
              <Link to={`/services`}>Learn More</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.white}>
            </div>
            <Carousel.Caption className={styles.caption}>
              <h3>Business Consulting</h3>
              <ul>
                <li>Business tools analysis</li>
                <li>Customer Relationship Management consulting</li>
                <li>Business processes</li>
              </ul>
              <Link to={`/services`}>Learn More</Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className={styles.borderGrad + " " + "my-5"}>
        <div className="p-1 text-center bg-body-tertiary">
          <div className="container py-1">
            <h2 className="text-body-emphasis">10 Tips For Building Your Own Website</h2>
            <p className="col-lg-8 mx-auto lead">
              I put this guide together for people who are on the fence about creating their own website. Here are some free tips if you decide to go the DIY route.
            </p>
            <button type='button' onClick={handleShowDownload}>Download</button>
          </div>
        </div>
      </div>

      <h2 className="mt-3 text-body-emphasis">Let's Work Together</h2>
      <ContactForm
        setModalMessage={setModalMessage}
        handleShow={handleShow}
      />
      <Modal
        show={showDownload}
        onHide={handleCloseDownload}
        backdrop="static"
        keyboard={false}

      >
        <Modal.Header closeButton>
          <Modal.Title>Provide Contact Info to Download</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalForm handleCloseDownload={handleCloseDownload} />
        </Modal.Body>
      </Modal>
    </main>
  )
}

export default Landing
