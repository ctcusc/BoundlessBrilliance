import React from 'react'
import headerLogo from '../images/logo.svg';
import emailLogo from '../images/email.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logoutImage from '../images/logout.svg';
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";



const WorkshopHeader = () => {
    return (
        <div style={{ fontSize: "50px" }}>
            <div style={{ position: "relative", height: "100%", width: "full"}}>
                <a>
                    <img src={emailLogo} alt="Email logo" style={{ position: "absolute", right: "6.5%", width: "2%", top: "50%", transform: "translateY(-50%)" }} />
                </a>
                <a>
                    <AccountCircleIcon style={{ position: "absolute", right: "2.5%", width: "3%", top: "50%", transform: "translateY(-50%)" }}/>
                </a>
            </div>
        </div>
    )
}

export default WorkshopHeader