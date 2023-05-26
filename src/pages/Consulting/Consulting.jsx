// npm modules
import { Link } from 'react-router-dom'


// components
import ContactForm from '../../components/ContactForm/ContactForm'
import { Helmet } from 'react-helmet-async'

// services


// styles and assets
import styles from './Consulting.module.css'
import logo from '../../assets/black-dd-logo.png'
import consulting from '../../assets/consulting.jpg'


// component


export default function Consulting({ setModalMessage, handleShow }) {
  return (
    <main className={styles.container}>
      <Helmet>
        <title>
          Business Process and CRM Consulting for Real Estate Agents
        </title>
        <link rel="canonical" href="/services/business-consulting" />
        <meta name='description' content="If you need help customizing your CRM, organizing your leads, or training your team on the best process to follow up with leads, I'm here to help." />
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
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          {/* <div className="col-10 col-sm-8 col-lg-6"> */}
          <div className="col-lg-6">
            <img src={consulting} className={styles.image + " " + "d-block mx-lg-auto img-fluid"} alt="A team working together" loading="lazy" title='Business Consulting for Realtors' />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Business Consulting</h1>
            <p className="lead">I have vast experience building sales processes and playbooks for teams large and small. If you need help customizing your CRM, organizing your leads, or training your team on the best process to follow up with leads, I'm here to help.</p>
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
