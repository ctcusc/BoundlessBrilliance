// import logo from './images/logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./routes/Home"
import UpdateWorkshop from "./routes/UpdateWorkshop"
import WorkshopdetailPage from "./routes/WorkshopdetailPage"
import VolunteerApplication from "./routes/VolunteerApplication"
import ApplicationSubmitted from "./routes/ApplicationSubmitted"



const App = () => {
  return <div>
    <Router>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/workshop/:id/update" component={UpdateWorkshop}/>
        <Route exact path = "/workshop/:id" component={WorkshopdetailPage}/>
        <Route exact path = "/volunteerapplication" component={VolunteerApplication}/>
        <Route exact path = "/application-submitted" component={ApplicationSubmitted}/>
      </Switch>
    </Router>
    </div>
}

export default App;
