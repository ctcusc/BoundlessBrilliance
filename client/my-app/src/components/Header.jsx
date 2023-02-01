import React from 'react'
import headerLogo from '../images/logo.svg';
import emailLogo from '../images/email.svg';

// import {Email} from '@mui/icons-material/Email';


const Header = () => {
    return(
        
        <div style={{fontSize: "50px", height: "100vh"}}>
            <div className="border d-flex align-items-center" style = {{position: "relative", height: "13.75%",  width: "full"}}>
                <img src={headerLogo}  style={{position: "absolute", left: "6.0%",  width: "21.52%"}}/>
                <img src={emailLogo} style={{position: "absolute", right: "6.5%",  width: "1.785%"}}/>
            </div>
        </div>
    )
}

export default Header