// npm modules
import { Link } from 'react-router-dom'


// components
import ContactForm from '../../components/ContactForm/ContactForm'
import { Helmet } from 'react-helmet-async'

// services


// styles and assets
import styles from './LeadCapture.module.css'
import logo from '../../assets/black-dd-logo.png'
import leadcapture from '../../assets/leadcapture.png'


// component


export default function LeadCapture({ setModalMessage, handleShow }) {
  return (
    <main className={styles.container}>
            <Helmet>
        <title>
          Lead Capturing Websites for Real Estate
        </title>
        <link rel="canonical" href="/services/lead-capture" />
        <meta name='description' content="Lead capture is one of the main goals for real estate websites. Dev Daddy Digital sites feature multiple touchpoints to capture leads." />
      </Helmet>
      <div className={styles.hero + " " + "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"} >
        <div className="row flex-lg-row align-items-center g-5 py-5">
          {/* <div className="col-10 col-sm-8 col-lg-6"> */}
          <div className="col-lg-6">
            <img src={logo} className={styles.image + " " + "d-block mx-lg-auto img-fluid"} alt="Dev Daddy Digital" loading="lazy" title='Dev Daddy Digital'/>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Real Estate Websites Done Right</h1>
            <h2 className="display-5 fw-normal lh-1 mb-3">Built for agents by an agent.</h2>
            <p className="lead fw-normal">Customize a package based on your unique business goals.</p>
            <Link to={`/services`}>All Services</Link>
            <Link to={`/pricing`}>Explore Pricing</Link>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.hero + " " + "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"} >
        <div className="row flex-lg-row align-items-center g-5 py-5">
          {/* <div className="col-10 col-sm-8 col-lg-6"> */}
          <div className="col-lg-6">
            <img src={leadcapture} className={styles.image + " " + "d-block mx-lg-auto img-fluid"} alt="CMA Request Form" loading="lazy" title='Lead Capturing Websites for Real Estate'/>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Lead Capture</h1>
            <p className="lead">Lead capture is one of the main goals for real estate websites. My sites feature multiple touchpoints and reasons so submit contact information so you don't lose out on valuable leads.</p>
            <p className="lead">Leads can be delivered directly to your inbox or your website can be integrated with your CRM. All Dev Daddy Digital sites are ready to connect to traffic analytics tools like Google Analytics and I can set up the integration for you.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to={`/pricing`}>Explore Pricing</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.contact}>
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Request a Free Consultation</h1>
        <ContactForm
          setModalMessage={setModalMessage}
          handleShow={handleShow}
        />
      </div>
    </main>
  )
}
