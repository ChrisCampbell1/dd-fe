// npm modules
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


// components
import HeroVideo from '../../components/HeroVideo/HeroVideo'

// services


// styles and assets
import styles from './Landing.module.css'
import chris from '../../assets/chris.png'

const Landing = () => {
  const [display, setDisplay] = useState(0)

  const handleNextClick = () => {
    if (display === 4) {
      setDisplay(0)
    } else {
      setDisplay(display + 1)
    }
  }

  const handleBackClick = () => {
    if (display === 0) {
      setDisplay(4)
    } else {
      setDisplay(display - 1)
    }
  }

  return (
    <main className={styles.container}>
      <HeroVideo />
      <div className={styles.introVideo}>
        <h2>About Me</h2>
        {/* <video src=""></video> */}
        <img src={chris} alt="placeholder" />
      </div>
      <div className={styles.services}>
        <h2>Services</h2>

        <AnimatePresence>

        </AnimatePresence>

        <div className={styles.servicesContainer}>
          <button type='button' onClick={() => handleBackClick()}>Back</button>
          <AnimatePresence>
            {
              display === 0 &&
              <motion.div
                className={styles.serviceCard}
                animate={{
                  opacity: 1,
                }}
                initial={{
                  opacity: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 1,
                }}
              >
                <div className={styles.top}>
                  <h3>Web Development</h3>
                </div>
                <div className={styles.bottom}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laborum iusto sapiente consequatur corporis quia perferendis hic voluptas quo molestiae aperiam, ad modi cumque voluptate ea esse eligendi. Temporibus, laboriosam.</p>
                  <Link>Learn More</Link>
                </div>
              </motion.div>
            }
          </AnimatePresence>
          {
            display === 1 &&
            <motion.div
              className={styles.serviceCard}
              animate={{
                opacity: 1,
              }}
              initial={{
                opacity: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 1,
                delay: 1,
              }}
            >
              <div className={styles.top}>
                <h3>Lead Capture</h3>
              </div>
              <div className={styles.bottom}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, odio. Quasi delectus sapiente, unde officiis tenetur rem eos deleniti cupiditate facere, molestias autem, eaque quidem perferendis doloremque architecto repudiandae soluta.</p>
                <Link>Learn More</Link>
              </div>
            </motion.div>
          }
          {
            display === 2 &&
            <div className={styles.serviceCard}>
              <div className={styles.top}>
                <h3>Lead Generation</h3>
              </div>
              <div className={styles.bottom}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam odio eaque beatae nam dolorum quia architecto earum corporis aperiam suscipit itaque vel vero explicabo laborum, ducimus, impedit autem dicta corrupti?</p>
                <Link>Learn More</Link>
              </div>
            </div>

          }
          {
            display === 3 &&
            <div className={styles.serviceCard}>
              <div className={styles.top}>
                <h3>Branding</h3>
              </div>
              <div className={styles.bottom}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel consequatur repudiandae suscipit! Accusantium reprehenderit amet a quam autem saepe quaerat dignissimos qui cupiditate ea dolor odit, debitis tenetur at id?</p>
                <Link>Learn More</Link>
              </div>
            </div>
          }
          {
            display === 4 &&
            <div className={styles.serviceCard}>
              <div className={styles.top}>
                <h3>Business Consulting</h3>
              </div>
              <div className={styles.bottom}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel consequatur repudiandae suscipit! Accusantium reprehenderit amet a quam autem saepe quaerat dignissimos qui cupiditate ea dolor odit, debitis tenetur at id?</p>
                <Link>Learn More</Link>
              </div>
            </div>
          }
          <button type='button' onClick={() => handleNextClick()}>Next</button>
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
