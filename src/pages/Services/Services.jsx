// npm modules
import { Link } from 'react-router-dom'

// components


// services


// styles and assets
import styles from './Services.module.css'
import webdesgin from '../../assets/webdesign.png'
import leadcapture from '../../assets/leadcapture.png'
import leadgen from '../../assets/leadgen.png'
import branding from '../../assets/branding.mp4'
import consulting from '../../assets/consulting.jpg'

// component


export default function Services() {
  return (
    <main className={styles.container}>
      <div className={styles.hero + " " + "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"}>
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal">Services</h1>
          <p className="lead fw-normal">Customize a package based on your unique business goals.</p>
          <Link to={`/pricing`}>Explore Pricing</Link>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.hero + " " + "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"} id='web-design'>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          {/* <div className="col-10 col-sm-8 col-lg-6"> */}
          <div className="col-lg-6">
            <img src={webdesgin} className={styles.image + " " + "d-block mx-lg-auto img-fluid"} alt="Real Estate Website Home Page Example"  loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Web Design</h1>
            <p className="lead">Most agents that I've spoken to, myself included, either don't have the website building tools they need or have a tool that is too complicated to use. However, they all agree that having a strong online brand is important.</p>
            <p className="lead">I can build you a beautiful custom website that not only meets your business needs but is easy to update and maintain and within your budget. We can incorporate featrues like:</p>
            <p className='lead'> Listings, Custom Landing Pages, Blogs, Reviews, Video Content, Custom IDX Integrations.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link to={`/pricing`}>Explore Pricing</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>


      <div className={styles.hero + " " + "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"} >
        <div className="row flex-lg-row align-items-center g-5 py-5">
          {/* <div className="col-10 col-sm-8 col-lg-6"> */}
          <div className="col-lg-6">
            <img src={leadcapture} className={styles.image + " " + "d-block mx-lg-auto img-fluid"} alt="CMA Request Form"  loading="lazy" />
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


<div className={styles.hero + " " + "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"} >
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    {/* <div className="col-10 col-sm-8 col-lg-6"> */}
    <div className="col-lg-6">
      <img src={leadgen} className={styles.image + " " + "d-block mx-lg-auto img-fluid"} alt="Neighborhood Specific Landing Page"  loading="lazy" />
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


<div className={styles.hero + " " + "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"} >
  <div className="row flex-lg-row align-items-center g-5 py-5">
    {/* <div className="col-10 col-sm-8 col-lg-6"> */}
    <div className="col-lg-6">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.video}
      >
        <source src={branding} type="video/mp4"/>
      </video>
      {/* <img src={branding} className={styles.image + " " + "d-block mx-lg-auto img-fluid"} alt="Brand Development Examples"  loading="lazy" /> */}
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Branding</h1>
      <p className="lead">Having a consistent brand across online and physical channels is a common business goal. If you have an established brand, we can incorporate it into your new website and create digital tempaltes for spcial media and other assets.</p>
      <p className="lead">If you're not sure where to start, Dev Daddy Digital can work with you to come up with a visual brand and create the necesary templates for other marketing assets like: social posts, flyers, mailers, newsletters, and more. These are just some exampels of branding work for real estate and other industries.</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
      <Link to={`/pricing`}>Explore Pricing</Link>
      </div>
    </div>
  </div>
</div>

<div className={styles.divider}></div>


<div className={styles.hero + " " + "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"} >
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    {/* <div className="col-10 col-sm-8 col-lg-6"> */}
    <div className="col-lg-6">
      <img src={consulting} className={styles.image + " " + "d-block mx-lg-auto img-fluid"} alt="A team working together"  loading="lazy" />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Business Consulting</h1>
      <p className="lead">I have vast experience buidling sales processes and playbooks for teams large and small. If you need help customizing your CRM, organizing your leads, or training your team on the best process to follow up with leads, I'm here to help.</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
      <Link to={`/pricing`}>Explore Pricing</Link>
      </div>
    </div>
  </div>
</div>

<div className={styles.divider}></div>

      
    </main>
  )
}
