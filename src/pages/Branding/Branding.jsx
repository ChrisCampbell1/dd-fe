// npm modules
import { Link } from 'react-router-dom'


// components
import ContactForm from '../../components/ContactForm/ContactForm'
import { Helmet } from 'react-helmet-async'


// services


// styles and assets
import styles from './Branding.module.css'
import logo from '../../assets/black-dd-logo.png'
// import branding from '../../assets/branding2.mp4'


// component


export default function Branding({ setModalMessage, handleShow }) {
  return (
    <main className={styles.container}>
      <Helmet>
        <title>
          Custom Brand Development For Real Estate Agents
        </title>
        <link rel="canonical" href="/services/branding" />
        <meta name='description' content="Having a consistent brand across online and physical channels is a common business goal. If you're not sure where to start, Dev Daddy Digital can work with you." />
      </Helmet>
      <div className={styles.hero + " " + "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"} >
        <div className="row flex-lg-row align-items-center g-5 py-5">
          {/* <div className="col-10 col-sm-8 col-lg-6"> */}
          <div className="col-lg-6">
            <img src={logo} className={styles.image + " " + "d-block mx-lg-auto img-fluid"} alt="Dev Daddy Digital" loading="lazy" title="Dev Daddy Digital" />
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
            <video
              autoPlay="true"
              loop="true"
              muted="true"
              playsInline="true"
              className={styles.video}
            >
              <source src="https://res.cloudinary.com/di65wkfgz/video/upload/v1685208846/BrandingGif_ufv8hv.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Branding</h1>
            <p className="lead">Having a consistent brand across online and physical channels is a common business goal. If you have an established brand, we can incorporate it into your new website and create digital templates for social media and other assets.</p>
            <p className="lead">If you're not sure where to start, Dev Daddy Digital can work with you to come up with a visual brand and create the necessary templates for other marketing assets like: social posts, flyers, mailers, newsletters, and more. These are just some examples of branding work for real estate and other industries.</p>
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
