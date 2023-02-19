import React from 'react'
import headerLogo from '../images/logo.svg';
import emailLogo from '../images/email.svg';


// import {Email} from '@mui/icons-material/Email';


const Header = () => {
    return (

        <div style={{ fontSize: "50px", height: "130px" }}>
            <div className="border d-flex align-items-center" style={{ position: "relative", height: "100%", width: "full", boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                <img src={headerLogo} style={{ position: "relative", left: "6.0%", width: "21.52%", bottom: '6px' }} />
                <img src={emailLogo} style={{ position: "absolute", right: "6.5%", width: "1.785%" }} />
            </div>
        </div>
    )
}

export default Header