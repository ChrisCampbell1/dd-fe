// npm modules
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

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


// components
import HorizontalNavBar from './components/HorizontalNavBar/HorizontalNavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

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

  return (
    <>
      <HorizontalNavBar />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/services"
          element={<Services/>}
        />
        <Route
          path="/services/web-design"
          element={<WebDesign/>}
        />
        <Route
          path="/services/lead-capture"
          element={<LeadCapture/>}
        />
        <Route
          path="/services/lead-generation"
          element={<LeadGeneration/>}
        />
        <Route
          path="/services/branding"
          element={<Branding/>}
        />
        <Route
          path="/services/business-consulting"
          element={<Consulting />}
        />
        <Route
          path="/contact"
          element={<Contact />}
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
    </>
  )
}

export default App
