import { React, useEffect, useState } from "react";
import LoginLogo from "../images/login_logo.svg"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import "bootstrap/dist/css/bootstrap.min.css"
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";


const Login = () => {
    const [passwordVisibile, setPasswordVisibile] = useState(false);
    const history = useHistory();
    const [cookies, setCookie] = useCookies(['user']);


    useEffect(() => {
        const passwordInput = document.getElementById("password");
        passwordInput.type = passwordVisibile ? "text" : "password";
    }, [passwordVisibile]);

    const toggleVisibility = () => {
        setPasswordVisibile(!passwordVisibile);
    }

    async function getResult(username, password) {

        const response = await fetch('/api/validateUser', {  
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                { 
                    "user_email" : username,
                    "user_password" : password
                }),
        })
        const data = await response.json();
        return data;
      }

    function routing(auth_data){
        // TODO: Set the auth_data cases to the correct routes

        const loginError = document.getElementById("loginError");
        console.log(auth_data);
        const auth_val = auth_data[0];
        const user_type = auth_data[1];
        const user_id = auth_data[2];

        if (auth_val === 1) {
            if (user_type == 0){
                // Set user_id as cookie
                setCookie('user_id', user_id, { path: '/' , secure: 'true'});

                // User is an volunteer: direct to user home
                history.push("/home");
                document.location.reload()

            } else if (user_type == 1){
                setCookie('user_id', user_id, { path: '/', secure: 'true'});

                history.push("/adminhome");
                document.location.reload()
            }

           
        } else if (auth_data === -1) {
            loginError.style.display = "block";
        } else{
            loginError.style.display = "block";
        }
    }
      

    const handleLogin = (e) => {
        e.preventDefault();
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const loginError = document.getElementById("loginError");
        const username = usernameInput.value;
        const password = passwordInput.value;

        console.log(cookies.name);

        if( !username || !password) {
            loginError.style.display = "block";
            return;
        }

        async function getData(username, password) {
            const result = await getResult(username, password);
            return [result.authentication, result.user_type, result.user_id];
        }
        
        getData(username, password).then((value) => {routing(value)});
        

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