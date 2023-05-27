// npm modules
import { Link } from 'react-router-dom'


// components
import ContactForm from '../../components/ContactForm/ContactForm'
import { Helmet } from 'react-helmet-async'


// services


// styles and assets
import styles from './WebDesign.module.css'
import logo from '../../assets/black-dd-logo.png'
// import webdesign from '../../assets/webdesign2.mp4'


// component


export default function WebDesign({ setModalMessage, handleShow }) {
  return (
    <main className={styles.container}>
      <Helmet>
        <title>
          Custom Web Design for Real Estate
        </title>
        <link rel="canonical" href="/services/web-design" />
        <meta name='description' content="Most agents that I've spoken to, myself included, either don't have the website building tools they need or have a tool that is too complicated to use." />
      </Helmet>
      <div className={styles.hero + " " + "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"} >
        <div className="row flex-lg-row align-items-center g-5 py-5">
          {/* <div className="col-10 col-sm-8 col-lg-6"> */}
          <div className="col-lg-6">
            <img src={logo} className={styles.image + " " + "d-block mx-lg-auto img-fluid"} alt="Dev Daddy Digital" loading="lazy" title='Dev Daddy Digital' />
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

      <div className={styles.hero + " " + "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"} id='web-design'>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          {/* <div className="col-10 col-sm-8 col-lg-6"> */}
          <div className="col-lg-6">
            <video
              autoPlay="true"
              loop="true"
              muted="true"
              playsInline="true"
              className={styles.video}
            >
              <source src="https://res.cloudinary.com/di65wkfgz/video/upload/v1685208204/BrandingGif_2_yzsdcr.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Web Design</h1>
            <p className="lead">Most agents that I've spoken to, myself included, either don't have the website building tools they need or have a tool that is too complicated to use. However, they all agree that having a strong online brand is important.</p>
            <p className="lead">I can build you a beautiful custom website that not only meets your business needs but is easy to update and maintain and within your budget. We can incorporate features like:</p>
            <p className='lead'> Listings, Custom Landing Pages, Blogs, Reviews, Video Content, Custom IDX Integrations.</p>
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
