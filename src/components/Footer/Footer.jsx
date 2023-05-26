// npm modules
import { Link } from 'react-router-dom'

// components


// services


// styles
import styles from './Footer.module.css'

// component


export default function Footer() {
  return (
<div className={styles.container + " " + "container"}>
  <footer className={"py-3 my-4"}>
    <ul className={styles.upper + " " + "nav justify-content-center pb-3 mb-3"}>
      <li className="nav-item">
        <Link to={`/`} className="nav-link px-2 text-body-secondary">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to={`/about`} className="nav-link px-2 text-body-secondary">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to={`/services`} className="nav-link px-2 text-body-secondary">
          Services
        </Link>
      </li>
      <li className="nav-item">
        <Link to={`/pricing`} className="nav-link px-2 text-body-secondary">
          Pricing
        </Link>
      </li>
      <li className="nav-item">
        <Link to={`/contact`} className="nav-link px-2 text-body-secondary">
          Contact
        </Link>
      </li>
    </ul>
    <p className="text-center text-body-secondary">&copy; 2023 Dream Home Denver, LLC DBA Dev Daddy Digital</p>
  </footer>
</div>
  )
}
