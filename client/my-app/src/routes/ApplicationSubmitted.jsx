import React from "react";
import headerLogo from '../images/logo.svg';
import "./ApplicationSubmitted.css"

const ApplicationSubmitted = () => {
    return (
        <div style={{backgroundColor: "#FBF9F2", width:"100%", height:"100vh", display:"flex", margin: "auto"}}>
            <img src={headerLogo}  style={{position: "absolute", left: "5.95%",  width: "21.53%", minWidth: "250px"}}/>
            <div className="hi">
                <p className="application-Submitted">
                    APPLICATION SUBMITTED
                </p>
                <p className="thank-you">
                    Thank you for your application! <br />
                    <br />
                    You will hear directly from us if we are interested in working with you. Make sure to keep an eye out on your email! <br />
                    <br />
                    Sincerely, <br />
                    Boundless Brilliance Team
                </p>
                <img src={headerLogo}  style={{ width: "100%", maxWidth: "397px", order: "2"}}/>
            </div>
        </div>
    )
}

export default ApplicationSubmitted