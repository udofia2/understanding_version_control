import { useState, useEffect } from 'react'
import eyeIcon from '../assets/images/eye-icon.svg'
import googleIcon from '../assets/images/google-icon.svg'
import { Button } from './Button.jsx'
import { HaveAccount } from './HaveAccount.jsx'
export default function SignIn(){
    // useEffect(() => {
    //     document.body.classList.add('signin-background');
      
    //     return () => {
    //       document.body.classList.remove('signin-background');
    //     };
    //   }, []);
    const [flip, setFlip] = useState(true)

    const handleFlip = (e) => {
        setFlip(prevFlip => !prevFlip)
        console.log(e)
    }

    const validate = (data) => {
        const formError = {}

        if(!data.email){
             formError.email = "Please enter your Email/Phone number"
        }

        else if((!/\S+@\S+\.\S+/.test(data.email)) && !/^\d{10}$/.test(data.email)) {
                formError.email =  "Enter your Email/Phone number"
        }
        else if(/^\d{10}$/.test(data.email) && data.email.length !== 10){
                formError.email = "Invalid  Phone Number"
        }
        else if(!/\S+@\S+\.\S+/.test(data.email)){
            formError.email = "Please enter your a valid Email"
        }

        if(!data.password){
            formError.password = "Password field cant be empty"
        }
        else if(data.password.length < 5){
            formError.password = "Please put a stronger password"
        }

        return formError
    }

    const [error, setError] = useState({})
    const [formValue, setFormValue] = useState({})

    const formSubmit = (e) => {
        // const rawData = Object.fromEntries(formData.entries())
        // const cleanedData = {
        //         ...rawData,
        //         'remember-me': rawData['remember-me'] === "on" ? true : false
        //        }

        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const rawData = Object.fromEntries(formData.entries())
        //rawData["remember-me"] = formData.get("remember-me") === "on" ? true : false;
        const cleanedData = {
         ...rawData,
         'remember-me': rawData['remember-me'] === "on" ? true : false
        }

            const validateForm = validate(cleanedData)

            if(Object.keys(validateForm).length > 0){
                setError(validateForm)
                return
            }


               setError({})
               setFormValue(cleanedData);
                // e.target.submit();
               console.log(rawData);
               console.log(cleanedData);
    }
    
    return(
        <section className="sign-in-container">
          <form onSubmit={formSubmit} className='sign-in-form'>
            <h4 className="form-header">WELCOME BACK</h4>
            <p className="form-subheader">Sign into your  PropMate account to continue</p>
            <div className="email-phone-number">
                <label htmlFor="email">Email/Phone Number</label>
                <input type="text" id="email" name='email' placeholder="Enter your Email/Phone number"/>
                {error.email && <span className='error'>{error.email}</span>}
            </div>
            <div className="password">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                    <input type={flip === true ? "password": "text"} id="password" name='password' placeholder="Enter your password" />
                    <img src={eyeIcon} alt="visibility" className='visibility' onClick={handleFlip}/>
                    
                </div>
                {error.password && <span className='error'>{error.password}</span>}
            </div>
            <div className="remember-me">
                <div className="remember-me-checked">
                    <input type="checkbox" id="checkbox" name='remember-me'/>    
                    <label htmlFor="checkbox">Remember Me</label>
                </div>
                <p className='forgot-password'><a href="#">Forgot Password</a></p>
            </div>
            <div className="login">
                <Button label="Login" id="login"/>
            </div>
            <div className="line-breaker">
                <span></span>
                <p>or</p>
                <span></span>
            </div>
            <div className="google-login">
                <Button label="Continue with Google" icon={googleIcon} id="google-login"/>
                {/* check it out//Google's OAuth 2.0 authentication system. */}
            </div>
            <div id='have-account'>
                <HaveAccount label="Don’t have account? Sign Up"/>
            </div>
          </form>
        </section>
    )
}