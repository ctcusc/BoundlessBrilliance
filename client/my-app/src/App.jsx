// import logo from './images/logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./routes/Home"
import UpdateWorkshop from "./routes/UpdateWorkshop"
import WorkshopdetailPage from "./routes/WorkshopdetailPage"
import WorkshopUpcomingPlaceholder from "./routes/WorkshopUpcomingPlaceholder"
import WorkshopAssignmentPlaceholder from "./routes/WorkshopAssignmentPlaceholder"


const App = () => {
  return <div>
    <Router>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/workshop/:id/update" component={UpdateWorkshop}/>
        <Route exact path = "/workshop/:id" component={WorkshopdetailPage}/>
        <Route exact path = "/WorkshopUpcomingPlaceholder" component={WorkshopUpcomingPlaceholder}/>
        <Route exact path = "/WorkshopAssignmentPlaceholder" component={WorkshopAssignmentPlaceholder}/>
      </Switch>
    </Router>
    </div>
}

export default App;
