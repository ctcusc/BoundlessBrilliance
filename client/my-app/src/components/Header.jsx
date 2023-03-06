import React from 'react'
import headerLogo from '../images/logo.svg';
import emailLogo from '../images/email.svg';
import logoutImage from '../images/logout.svg';


const Header = () => {
    return (

        <div style={{ fontSize: "50px", height: "130px" }}>
            <div className="border d-flex align-items-center" style={{ position: "relative", height: "100%", width: "full", boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                <img src={headerLogo} alt="Boundless Brilliance logo" style={{ position: "relative", left: "6.0%", width: "21.52%", bottom: '6px' }} />
                {/* <a href="mailto:recipient@example.com?subject=Subject%20line&body=Body%20text"> */}
                <a href="https://mail.google.com/mail/?view=cm&to=cherisecharleswell@boundlessbrilliance.org">
                    <img src={emailLogo} alt="Email logo" style={{ position: "absolute", right: "6.5%", width: "1.7%", top: "50%", transform: "translateY(-50%)" }} />

                    {/* <img src={emailLogo} alt="Email logo" style={{ position: "absolute", right: "6.5%", width: "1.785%" }} /> */}
                </a>
                
                <img src={logoutImage} alt="Logout Image" style={{ position: "absolute", right: "2.5%", width: "1.5%" }}></img>
                

            </div>
        </div>
    )
}

export default Header