// npm modules
import { Link } from 'react-router-dom'

// components


// services


// styles and assets
import styles from './About.module.css'
import video from '../../assets/ddintro.mp4'
import process from '../../assets/process2.png'
import { Helmet } from 'react-helmet-async'


// component


export default function About() {
  return (
    <main className={styles.container}>
      <Helmet>
        <title>
          About Me - A Realtor Turned Software Engineer Building Real Estate Websites
        </title>
        <link rel="canonical" href="/about" />
        <meta name='description' content="I'm a realtor turned software engineer. Learn how I put my experience to work to build beautiful and easy to use real estate websites." />
      </Helmet>
      <div className={styles.hero + " " + "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"}>
        <div className={styles.border + " " +"col-md-5 p-lg-5 mx-auto my-5"}>
          <h1 className="display-4 fw-normal">About Me</h1>
          {/* <p className="lead fw-normal">Dev Daddy Digital offers flexible packages with transparent pricing to meet your business needs. To learn more about customizing these services or for a consultation to see which services best meet your business goals schedule a free consultation.</p> */}
          <Link to={`/contact`} state={'Free Consultation'}>Let's Work Together</Link>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.hero + " " + "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"} >
        <div className="row flex-lg-row align-items-center g-5 py-5">
          {/* <div className="col-10 col-sm-8 col-lg-6"> */}
          <div className="col-lg-6">
            <video
              controls
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

      <div className={styles.infographic}>
        <img src={process} alt="an infographic explaining how I work with clients" className='img-fluid mx-auto' title='an infographic explaining how I work with clients' loading='lazy'/>
      </div>

      <div className={styles.divider}></div>
    </main>
  )
}
