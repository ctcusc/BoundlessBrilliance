import React from 'react'
import headerLogo from '../images/logo.svg';
import emailLogo from '../images/email.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logoutImage from '../images/logout.svg';
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";



const WorkshopHeader = () => {
    const history = useHistory();
    const [cookies, setCookie] = useCookies(['user']);

    function logout() {
        setCookie('user_id', -1, { path: '/' , secure: 'true'});
        history.push("/");
        document.location.reload()
    }

    return (
        <div style={{ fontSize: "50px" }}>
            <div style={{ position: "relative", height: "100%", width: "full"}}>
                <a href="https://mail.google.com/mail/?view=cm&to=info@boundlessbrilliance.org">
                    <img src={emailLogo} alt="Email logo" style={{ position: "absolute", right: "6.5%", width: "1.7%", top: "50%", transform: "translateY(-50%)" }} Accepted />

                    {/* <img src={emailLogo} alt="Email logo" style={{ position: "absolute", right: "6.5%", width: "1.785%" }} /> */}
                </a>
                <a>
                    <img src={logoutImage} alt="Button Image" onClick={logout} style={{ position: "absolute", right: "2.5%", width: "2.3%", top: "50%", transform: "translateY(-50%)" }} />
                </a>
            </div>
        </div>
    )
}

export default WorkshopHeader