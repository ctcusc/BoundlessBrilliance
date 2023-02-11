import { React, useEffect, useState } from "react";
import LoginLogo from "../images/login_logo.svg"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import "bootstrap/dist/css/bootstrap.min.css"

const Login = () => {
    const [passwordVisibile, setPasswordVisibile] = useState(false);

    useEffect(() => {
        const passwordInput = document.getElementById("password");
        passwordInput.type = passwordVisibile ? "text" : "password";
    }, [passwordVisibile]);

    const toggleVisibility = () => {
        setPasswordVisibile(!passwordVisibile);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const loginError = document.getElementById("loginError");
        const username = usernameInput.value;
        const password = passwordInput.value;
        const id = "";

        if( !username || !password) {
            loginError.style.display = "block";
            return;
        }

        // TODO: redirect to user home, history.push only updates url, does not rerender the page
        // history.push(`/homes`);

        // TODO: API call for validating user.
        // const response = await fetch(`/api/validateUser?user_email=${username}&user_password=${password}`).then((res) => {
        //     console.log(res);
        // })
    }

    return (
        <div className="position-fixed w-100 h-100" style={{backgroundColor: '#FBF8F2', overflowY: 'scroll'}}>
            <div className="row justify-content-center align-items-center" style={{height:"100vh"}}>
                <div className="col-4">
                    <div className="card pb-5 px-3" style={{marginTop: "10%", marginBottom: "10%", borderRadius: "30px"}}>
                        <img class="card-img-top" style={{height:"100px"}} src={LoginLogo} alt="Card image cap"/>
                        <div className="card-body p-5-lg p-3-md p-1-sm">
                            <h5 style={{fontFamily:"Avenir Black", fontSize : "28px"}} class="p-4 font-weight-bold card-title text-center">Log in</h5>
                            <div class="mb-4 card-text">
                                <p style={{fontFamily:"Avenir", fontSize : "14px"}}>Want to create a volunteer account? <a href="/">Get Started</a></p>
                            </div>
                            <div id="loginError" class="mb-2 card-text" style={{display: "none", background: "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #FF4B4B", borderRadius: "11px"}}>
                                <p style={{padding: "5px",fontFamily:"Avenir Black", fontSize : "12px", color: "red"}}>
                                    &ensp;<ErrorOutlineIcon style={{width: "15px", height: "15px"}}/>&ensp;Invalid Username or Password
                                </p>
                            </div>
                            <form onSubmit={handleLogin} autocomplete="off">
                                <div className="form-group">
                                    <input id="username" type="text" class="form-control" name="username" placeholder="Username" style={{fontFamily:"Avenir", fontSize : "16px"}}/>
                                </div>
                                <div className="form-group">
                                    <div id="password-container" style={{position: "relative1"}}>
                                        <div onClick={toggleVisibility} style={{position: "absolute", right: "45px", transform: "translateY(6px)", cursor: "pointer"}}>
                                            {passwordVisibile ? <VisibilityOffIcon style={{ fill: '#686868' }}/> : <VisibilityIcon style={{ fill: '#686868' }}/>}
                                        </div>
                                        <input id="password" type="password" className="form-control" name="password" placeholder="Password" style={{fontFamily:"Avenir", fontSize : "16px"}}/>
                                    </div>
                                </div>
                            <div class="pb-5 mt-3 card-text" style={{fontFamily:"Avenir", fontSize : "14px"}}><a href="/">Forgot password?</a></div>
                                <button type="submit" id="sendlogin" className="btn btn-primary w-100" style={{fontFamily:"Avenir Heavy", fontSize : "14px", backgroundColor: "#1398A0", borderRadius: "12px"}}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login