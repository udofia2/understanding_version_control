
import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import SignIn from './components/SignIn'
import { Footer } from './components/Footer'
import OtpVerification from './components/OtpVerification'
import VerificationSuccess from './components/VerificationSuccess'
import './App.css'

function App() {
  const location = useLocation();
  console.log(location)
  const isSignIn = location.pathname === '/signin' ? 'App signin-background' : 'App';

  return (
    
    // <div className={isSignIn}> 
    //   <VerificationSuccess />
    // </div>
    <div className={isSignIn}>
      <Header />
        <Routes>
          <Route path='/' element={<OtpVerification />}/>
          <Route path='/signin' element={<SignIn />}/>
        </Routes>
      <Footer />
    </div>
  )
}

export default App
