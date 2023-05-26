// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Services from './pages/Services/Services'
import LeadCapture from './pages/LeadCapture/LeadCapture'
import WebDesign from './pages/WebDesign/WebDesign'
import LeadGeneration from './pages/LeadGeneration/LeadGeneration'
import Branding from './pages/Branding/Branding'
import Consulting from './pages/Consulting/Consulting'
import Contact from './pages/Contact/Contact'
import Pricing from './pages/Pricing/Pricing'
import About from './pages/About/About'


// components
import HorizontalNavBar from './components/HorizontalNavBar/HorizontalNavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Modal from 'react-bootstrap/Modal'
import Footer from './components/Footer/Footer'


// services
import * as authService from './services/authService'

// styles
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  const [user, setUser] = useState(authService.getUser())
  // const navigate = useNavigate()

  // const handleLogout = () => {
  //   authService.logout()
  //   setUser(null)
  //   navigate('/')
  // }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  const location = useLocation()
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    })
  }

  useEffect(() => {
    scrollToTop()
  }, [location])

        //modal code
        const [show, setShow] = useState(false);
        const [modalMessage, setModalMessage] = useState('')
  
        const handleClose = () => {
          setShow(false);
          setModalMessage('')
        }
        const handleShow = () => setShow(true);
        //modal code

  return (
    <>
      <HorizontalNavBar />
      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}

      >
        <Modal.Header closeButton>
          <Modal.Title>Thanks for reaching out!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalMessage}</p>
        </Modal.Body>
      </Modal>
      <Routes>
        <Route 
          path="/"
          element={<Landing
            user={user}
            setModalMessage={setModalMessage}
            handleShow={handleShow}
          />} 
        />
        <Route
          path="/about"
          element={<About/>}
        />
        <Route
          path="/services"
          element={<Services/>}
        />
        <Route
          path="/services/web-design"
          element={<WebDesign
            setModalMessage={setModalMessage}
            handleShow={handleShow}
          />}
        />
        <Route
          path="/services/lead-capture"
          element={<LeadCapture
            setModalMessage={setModalMessage}
            handleShow={handleShow}
          />}
        />
        <Route
          path="/services/lead-generation"
          element={<LeadGeneration
            setModalMessage={setModalMessage}
            handleShow={handleShow}
          />}
        />
        <Route
          path="/services/branding"
          element={<Branding
            setModalMessage={setModalMessage}
            handleShow={handleShow}
          />}
        />
        <Route
          path="/services/business-consulting"
          element={<Consulting
            setModalMessage={setModalMessage}
            handleShow={handleShow}
          />}
        />
        <Route
          path="/contact"
          element={
          <Contact 
          setModalMessage={setModalMessage}
          handleShow={handleShow}
          />
        }
        />
        <Route
          path="/pricing"
          element={<Pricing />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
