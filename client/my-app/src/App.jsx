// import logo from './images/logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./routes/Home"
import Login from "./routes/Login"
import UpdateWorkshop from "./routes/UpdateWorkshop"
import WorkshopdetailPage from "./routes/WorkshopdetailPage"


const App = () => {
  return <div>
    <Router>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/login" component={Login}/>
        <Route exact path = "/workshop/:id/update" component={UpdateWorkshop}/>
        <Route exact path = "/workshop/:id" component={WorkshopdetailPage}/>
      </Switch>
    </Router>
    </div>
}

export default App;
