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
    </main>
  )
}

export default Landing
