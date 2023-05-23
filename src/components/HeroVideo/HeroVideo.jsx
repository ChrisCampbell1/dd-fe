// npm modules
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// components


// services


// styles and assets
import styles from './HeroVideo.module.css'
import video from '../../assets/heroBG.mp4'
import logo from '../../assets/white-dd-logo.png'

// component


export default function HeroVideo() {


  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <video
          src={video}
          playsInline
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className={styles.heroContent}>
        <motion.div
          className={styles.heroContentLeft}

          animate={{
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 1,
            delay: .5,
          }}
        >
          <img src={logo} alt="Dev Daddy Logo" />
        </motion.div>
        <motion.div
          className={styles.heroContentRight}
          animate={{
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 1,
            delay: .5,
          }}
        >
          <h1>Custom Web Design, Branding, Business Consulting</h1>
          <Link to={`/contact`}>Get in Touch</Link>
        </motion.div>
      </div>
    </div>
  )
}
