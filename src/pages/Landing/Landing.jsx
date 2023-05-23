// npm modules
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

// components
import HeroVideo from '../../components/HeroVideo/HeroVideo'
import ContactForm from '../../components/ContactForm/ContactForm'

// services


// styles and assets
import styles from './Landing2.module.css'
// import chris from '../../assets/chris.png'
import video from '../../assets/placeholder.mp4'

const Landing = () => {


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <main className={styles.container}>
      <HeroVideo />

      <div className={styles.about}>
        <h2 className="text-body-emphasis">About Me</h2>
        <video width='700' controls>
          <source src={video} type="video/mp4" />
        </video>

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

      <div className="my-1">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="container py-5">
            <h2 className="text-body-emphasis">10 Tips For Building Your Own Website</h2>
            <p className="col-lg-8 mx-auto lead">
              I put this guide together for people who are on the fence about creating their own website. Here are some free tips if you decide to go the DIY route.
            </p>
            <button type='button'>Download</button>
          </div>
        </div>
      </div>
      <h2 className="text-body-emphasis">Let's Chat!</h2>
      <ContactForm />
    </main>
  )
}

export default Landing
