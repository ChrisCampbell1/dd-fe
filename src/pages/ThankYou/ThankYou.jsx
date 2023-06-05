// npm modules


// components
import { Helmet } from 'react-helmet-async'

// services


// styles
import styles from './ThankYou.module.css'

// component


export default function ThankYou({ modalMessage }) {
  return (
    <main className={styles.container}>
      <Helmet>
        <title>
          Thanks for your message!
        </title>
        <link rel="canonical" href="/thankyou/" />
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-55Y7G4GVHM"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-55Y7G4GVHM');
        </script>

        <script>
          gtag('event', 'conversion', {'send_to': 'AW-401059015/icYFCPbYkqYYEMfZnr8B'})
        </script> */}
      </Helmet>
      <div className={styles.hero + " " + "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"}>
        <div className={styles.border + " " + "col-md-5 p-lg-5 mx-auto my-5"}>
          <h1 className="display-4 fw-normal">Thank You!</h1>
          <p className="lead fw-normal">{modalMessage}</p>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    </main>
  )
}
