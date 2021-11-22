import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home"
import Vehicles from "./components/Vehicles/Vehicles"
import Buildings from "./components/Buildings/Buildings"
import Credits from "./components/Credits/Credits"
import React from "react";
import './App.css';

function App() {

  var done = false;

  if (!done) {
    alert("Beste gebruiker,\nWe zijn verhuisd van domein. U kunt ons nu vinden op https://mks-dashboard.github.io/ \n\n\nDear user,\nWe have moved domain. You can now find us at https://mks-dashboard.github.io/")
    done = true
  }

  return (
    <Router>
      <Switch>
        <Route exact path='/mks-dashboard/'>
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route exact path='/mks-dashboard/vehicles'>
          <Layout>
            <Vehicles />
          </Layout>
        </Route>
        <Route exact path='/mks-dashboard/buildings'>
          <Layout>
            <Buildings />
          </Layout>
        </Route>
        <Route exact path='/mks-dashboard/credits'>
          <Layout>
            <Credits />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
