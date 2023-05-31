// npm modules
import { Link } from 'react-router-dom'

// components
import { Helmet } from 'react-helmet-async'


// services


// styles
import styles from './Pricing.module.css'

// component


export default function Pricing() {
  return (
    <main className={styles.container}>
      <Helmet>
        <title>
          Pricing - Customize a Web Design Package That Meets Your Needs
        </title>
        <link rel="canonical" href="/pricing" />
        <meta name='description' content="Dev Daddy Digital offers flexible packages with transparent pricing to meet your business needs." />
      </Helmet>
      <div className={styles.hero + " " + "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"}>
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal">Pricing</h1>
          <p className="lead fw-normal">Dev Daddy Digital offers flexible packages with transparent pricing to meet your business needs. To learn more about customizing these services or for a consultation to see which services best meet your business goals schedule a free consultation.</p>
          <Link to={`/contact`} state={'Free Consultation'}>Let's Get Started</Link>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.priceContainer + " " + "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"}>
        <div className={styles.priceCard}>
          <div className="card mb-4 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Custom Website</h4>
            </div>
            <div className={styles.cardBody + " " + "card-body"}>
              <h1 className="card-title pricing-card-title">$2,500<span className='fw-light'>*</span></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Built with SEO best practices</li>
                <li>Google Analytics and AdWords integration</li>
                <li>Display your listings</li>
                <li>Reviews</li>
                <li>Create custom neighborhood landing pages</li>
                <li>Training on how to use your new site</li>
                <li>*Requires monthly hosting</li>
              </ul>
              <Link className={styles.cardLink} to={`/contact`} state={"Web Design"}>Let's Get Started</Link>
            </div>
          </div>
        </div>
        <div className={styles.priceCard}>
          <div className="card mb-4 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Hosting</h4>
            </div>
            <div className={styles.cardBody + " " + "card-body"}>
              <h1 className="card-title pricing-card-title">$35<small className="text-body-secondary fw-light">/mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Professional hosting of your site</li>
                <li>You own your domain</li>
                <li>No long term contracts</li>
              </ul>
              <Link className={styles.cardLink} to={`/contact`} state={"Web Hosting"}>Let's Get Started</Link>
            </div>
          </div>
        </div>
        <div className={styles.priceCard}>
          <div className="card mb-4 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Branding</h4>
            </div>
            <div className={styles.cardBody + " " + "card-body"}>
              <h1 className="card-title pricing-card-title">$300</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Custom logo design</li>
                <li>Brand color selection</li>
                <li>Font selection</li>
                <li>Domain name consulting</li>
              </ul>
              <Link className={styles.cardLink} to={`/contact`} state={"Branding"}>Let's Get Started</Link>

            </div>
          </div>
        </div>
        <div className={styles.priceCard}>
          <div className="card mb-4 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Marketing Templates</h4>
            </div>
            <div className={styles.cardBody + " " + "card-body"}>
              <h1 className="card-title pricing-card-title">$300*</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>4 Social Media Templates</li>
                <li>Newsletter Template</li>
                <li>Property Flyer Template</li>
                <li>Custom templates available for additional investment </li>
                <li>*For best experience, Canva Pro account is suggested to use templates.</li>
              </ul>
              <Link className={styles.cardLink} to={`/contact`} state={"Marketing Templates"}>Let's Get Started</Link>

            </div>
          </div>
        </div>
        <div className={styles.priceCard}>
          <div className="card mb-4 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Business Consulting</h4>
            </div>
            <div className={styles.cardBody + " " + "card-body"}>
              <h1 className="card-title pricing-card-title fw-light">Inquire for quote</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>CRM customization</li>
                <li>Sales process optimization</li>
                <li>Tech tools audit</li>
                <li>Lead follow up training</li>
              </ul>
              <Link className={styles.cardLink} to={`/contact`} state={"Consulting"}>Let's Get Started</Link>

            </div>
          </div>
        </div>
        <div className={styles.priceCard}>
          <div className="card mb-4 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Custom Development</h4>
            </div>
            <div className={styles.cardBody + " " + "card-body"}>
              <h1 className="card-title pricing-card-title fw-light">Inquire for quote</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Monthly site updates</li>
                <li>CRM integration</li>
                <li>IDX integration</li>
                <li>Custom landing pages</li>
                <li>Custom feature development for your website</li>
                <li>Have an idea? I can probably build it!</li>
              </ul>
              <Link className={styles.cardLink} to={`/contact`} state={"Custom Development"}>Let's Get Started</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>


    </main >
  )
}
