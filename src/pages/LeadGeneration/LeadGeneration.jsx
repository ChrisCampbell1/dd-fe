// npm modules
import { Link } from 'react-router-dom'


// components
import ContactForm from '../../components/ContactForm/ContactForm'

// services


// styles and assets
import styles from './LeadGeneration.module.css'
import logo from '../../assets/black-dd-logo.png'
import leadgen from '../../assets/leadgen.png'


// component


export default function LeadGeneration({ setModalMessage, handleShow }) {
  return (
    <main className={styles.container}>

      <div className={styles.hero + " " + "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"} >
        <div className="row flex-lg-row align-items-center g-5 py-5">
          {/* <div className="col-10 col-sm-8 col-lg-6"> */}
          <div className="col-lg-6">
            <img src={logo} className={styles.image + " " + "d-block mx-lg-auto img-fluid"} alt="CMA Request Form" loading="lazy" />
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
            <img src={leadgen} className={styles.image + " " + "d-block mx-lg-auto img-fluid"} alt="Neighborhood Specific Landing Page" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Lead Generation</h1>
            <p className="lead">Dev Daddy Digital sites are ready for lead generation. All pages are built with SEO best practices. Many agents want to try out Google Adwords but don't have a site that is optimized for paid ads. Our sites have built in tools to create landing pages built for conversion. Need something a little more custom? Since you're hiring a developer, the sky is the limit!</p>
            <p className="lead">By integrating Google Analytics and Google Adwords into your site you can track the conversion and ROI of your ad spend. Avoid getting locked into long term contracts and obscure pricing plans and start generating your own leads.</p>
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
