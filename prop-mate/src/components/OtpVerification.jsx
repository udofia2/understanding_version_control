import checkMark from '../assets/images/checkmark-icon.svg'
import { HaveAccount } from "./HaveAccount";
import { Link } from 'react-router-dom';

export default function OtpVerification() {
    return(
        <>
        <section className="otp-verifiaction-screen">
            <div className="getting-on-board">
                <p className="onboard-title">let's get you onboard. Its easy</p>
                <p className="onboard-subtitle"><span>Full Name</span></p> 
                <div className='successful'>
                    <img src={checkMark} alt="checkmark-icon" className="checkmark-icon" />
                    <h2 className="successful-text">Successful</h2>
                </div>  
                <Link to="/signin" className='signIn-link'>
                    <HaveAccount label="Have an account? Sign in"/>
                </Link>
            </div>
        </section>
        </>
    )
}