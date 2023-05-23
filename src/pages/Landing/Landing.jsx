// npm modules
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

// components
import HeroVideo from '../../components/HeroVideo/HeroVideo'

// services


// styles and assets
import styles from './Landing2.module.css'
import chris from '../../assets/chris.png'

const Landing = () => {


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <main className={styles.container}>
      <HeroVideo />
      <div className={styles.introVideo}>
        <h2>About Me</h2>
        {/* <video src=""></video> */}
        <img src={chris} alt="placeholder" />
      </div>
      <h2>Services</h2>
      <div className={styles.services}>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className={styles.serviceCarousel}
          variant='dark'
        >
          <Carousel.Item>
            <div className={styles.white}>
            </div>
            <Carousel.Caption className={styles.caption}>
              <h3>Web Development</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit necessitatibus officiis fuga aspernatur eos odio officia, voluptas totam corporis consequuntur veritatis ullam at maxime non cupiditate in saepe nisi voluptates!</p>
              <Link>Learn More</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.white}>
            </div>
            <Carousel.Caption className={styles.caption}>
              <h3>Lead Capture</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit necessitatibus officiis fuga aspernatur eos odio officia, voluptas totam corporis consequuntur veritatis ullam at maxime non cupiditate in saepe nisi voluptates!</p>
              <Link>Learn More</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.white}>
            </div>
            <Carousel.Caption className={styles.caption}>
              <h3>Lead Generation</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit necessitatibus officiis fuga aspernatur eos odio officia, voluptas totam corporis consequuntur veritatis ullam at maxime non cupiditate in saepe nisi voluptates!</p>
              <Link>Learn More</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.white}>
            </div>
            <Carousel.Caption className={styles.caption}>
              <h3>Branding</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit necessitatibus officiis fuga aspernatur eos odio officia, voluptas totam corporis consequuntur veritatis ullam at maxime non cupiditate in saepe nisi voluptates!</p>
              <Link>Learn More</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.white}>
            </div>
            <Carousel.Caption className={styles.caption}>
              <h3>Business Consulting</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit necessitatibus officiis fuga aspernatur eos odio officia, voluptas totam corporis consequuntur veritatis ullam at maxime non cupiditate in saepe nisi voluptates!</p>
              <Link>Learn More</Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={styles.download}>
        <h3>placeholder for guide download</h3>
      </div>
      <div className={styles.contact}>
        <h3>Contact Form</h3>
      </div>
    </main>
  )
}

export default Landing
