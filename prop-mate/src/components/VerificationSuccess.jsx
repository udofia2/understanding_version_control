import checkMark from '../assets/images/checkmark_success.svg'
import Header from './Header';
import { Footer } from './Footer';
export default function VerificationSuccess() {
    return(
        <>
        <section className="verifiaction-success-screen">
            <Header />
            <div className="verification-success-container">
                <img src={checkMark} alt="checkmark-icon" className="verification-success-icon" />
                <h3 className="verification-success-title">Your Password has been </h3>
                <h3 className="verification-success-title">successfully reset !!</h3>
                <p className="verification-success-subtitle" id='subtitle'>You can now log in with your new password.</p>
                <p className="verification-success-subtitle">If you encounter any issues kindly contact  
                <a href="#" className='contact-support'> support.</a> 
                </p>
                <button className='back-to-login'>Back to Log in</button>
            </div>
            <Footer />
        </section>
        </> 
    )
}
