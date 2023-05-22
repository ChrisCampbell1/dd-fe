// npm modules


// components
import HeroVideo from '../../components/HeroVideo/HeroVideo'

// services


// styles
import styles from './Landing.module.css'

const Landing = () => {
  return (
    <main className={styles.container}>
      <HeroVideo />
      <div className={styles.introVideo}>
        <h1>Web Design, Development, and Branding Consulting</h1>
        <video src=""></video>
      </div>
      <div className={styles.services}>
        <h2>Services</h2>
        <div className={styles.servicesContainer}>
          <h3>
            Website Development
          </h3>
          <h3>
            Lead Capture / Generation
          </h3>
          <h3>
            Brand Development
          </h3>
        </div>
        <div className={styles.download}>
          <h3>placeholder for guide download</h3>
        </div>
        <div className={styles.contact}>
          <h3>Contact Form</h3>
        </div>
      </div>
    </main>
  )
}

export default Landing
