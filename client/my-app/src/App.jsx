// import logo from './images/logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./routes/Home"
import Login from "./routes/Login"
import VolunteerApplication from "./routes/VolunteerApplication"
import ApplicationSubmitted from "./routes/ApplicationSubmitted"
import { useCookies } from 'react-cookie';



const App = () => {

  return <div>
    <Router>
      <Switch>
        <Route exact path = "/" component={Login}/>
        <Route exact path = "/home" component={Home}/>
        <Route exact path = "/volunteer-application" component={VolunteerApplication}/>
        <Route exact path = "/application-submitted" component={ApplicationSubmitted}/>
      </Switch>
    </Router>
    </div>
}

export default App;
