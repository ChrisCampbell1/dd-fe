// npm modules
import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'


// components


// services


// styles
import styles from './HorizontalNavBar.module.css'

// component


export default function HorizontalNavBar() {
  const [display, setDisplay] = useState(false)
  const [displaySub, setDisplaySub] = useState(false)
  // const [displaySubSub, setDisplaySubSub] = useState(false)
  const [navColor, setNavColor] = useState(false)

  let location = useLocation()

  const changeNavColor = () => {
    if (location.pathname !== "/") {
      setNavColor(true)
    } else if (window.scrollY >= 50) {
      setNavColor(true)
    } else setNavColor(false)
  }

  window.addEventListener('scroll', changeNavColor)

  const handleClick = () => {
    setDisplay(!display)
  }

  const handleSubClick = () => {
    setDisplaySub(!displaySub)
  }

  // const handleSubSubClick = () => {
  //   setDisplaySubSub(!displaySubSub)
  // }

  useEffect(() => {
    setDisplay(false)
    changeNavColor()
  }, [location])


  return (
    <>
      {navColor ?
        <>
          <nav className={styles.containerDark}>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li className={styles.dropdown}><NavLink to="/services">Services</NavLink>
                <ul className={styles.dropdownContent}>
                  <li><NavLink to='/services/web-design'>Web Design</NavLink></li>
                  <li><NavLink to='/services/lead-capture'>Lead Capture</NavLink></li>
                  <li><NavLink to='/services/lead-generation'>Lead Generation</NavLink></li>
                  <li><NavLink to='/services/branding'>Branding</NavLink></li>
                  <li><NavLink to='/services/business-consulting'>Business Consulting</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/pricing">Pricing</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
        </>
        :
        <>
          <nav className={styles.container}>
            <ul>
              <li><NavLink to="/" className={styles.underline}>Home</NavLink></li>
              <li><NavLink to="/about" className={styles.underline}>About</NavLink></li>
              <li className={styles.dropdown}><NavLink to="/services">Services</NavLink>
                <ul className={styles.dropdownContent}>
                  <li><NavLink to='/services/web-design'>Web Design</NavLink></li>
                  <li><NavLink to='/services/lead-capture'>Lead Capture</NavLink></li>
                  <li><NavLink to='/services/lead-generation'>Lead Generation</NavLink></li>
                  <li><NavLink to='/services/branding'>Branding</NavLink></li>
                  <li><NavLink to='/services/business-consulting'>Business Consulting</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/pricing" className={styles.underline}>Pricing</NavLink></li>
              <li><NavLink to="/contact" className={styles.underline}>Contact</NavLink></li>
            </ul>
          </nav>
        </>

      }

      <nav className={styles.mobileNav}>
        <div className={styles.mobileNavTop}>
          <button className={styles.hamburger} onClick={handleClick}>
            ☰
          </button>
        </div>
        <AnimatePresence>
          {display &&
            <motion.div
              className={styles.mobileLinks}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: .5,
              }}
            >
              <ul>
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <p onClick={handleSubClick}>Services</p>
                {displaySub &&
                  <>
                    <li><NavLink to='/services'>All</NavLink></li>
                    <li><NavLink to='/services/web-design'>Web Design</NavLink></li>
                    <li><NavLink to='/services/lead-capture'>Lead Capture</NavLink></li>
                    <li><NavLink to='/services/lead-generation'>Lead Generation</NavLink></li>
                    <li><NavLink to='/services/branding'>Branding</NavLink></li>
                    <li><NavLink to='/services/business-consulting'>Business Consulting</NavLink></li>
                  </>
                }
                <li><NavLink to="/pricing">Pricing</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </motion.div>
          }
        </AnimatePresence>
      </nav>
    </>
  )
}
