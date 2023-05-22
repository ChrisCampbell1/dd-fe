// npm modules
import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'


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
                  <li><NavLink to='#'>Sub Cat 1</NavLink></li>
                  <li><NavLink to='#'>Sub Cat 2</NavLink></li>
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
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li className={styles.dropdown}><NavLink to="/services">Services</NavLink>
                <ul className={styles.dropdownContent}>
                  <li><NavLink to='#'>Sub Cat 1</NavLink></li>
                  <li><NavLink to='#'>Sub Cat 2</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/pricing">Pricing</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
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
        {display &&
          <div
            className={styles.mobileLinks}
          >
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <p onClick={handleSubClick}>Services</p>
                {displaySub &&
                  <>
                    <li><NavLink to='#'>Sub Cat 1</NavLink></li>
                    <li><NavLink to='#'>Sub Cat 2</NavLink></li>
                  </>
                }
              <li><NavLink to="/pricing">Pricing</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
        }
      </nav>
    </>
  )
}
