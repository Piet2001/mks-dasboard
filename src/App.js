import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home"
import Vehicles from "./components/Vehicles/Vehicles"
import Buildings from "./components/Buildings/Buildings"
import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {

  const [SessionId, setSessionId] = useState("Default");
  const [ApiVehicles, setApiVehicles] = useState([]);

  useEffect(() => {
    const fetchMissions = async () => {
      const result = await axios('https://www.meldkamerspel.com/einsaetze.json/');
      console.log(result.data)
      return result.data;
    }
    fetchMissions().then(r => setApiVehicles(r));
  }, [SessionId]);

  console.log(ApiVehicles)
  return (
    <Router>
      <Switch>
        <Route exact path='/mks-dashboard-react/'>
          <Layout>
            <Home setSessionId={setSessionId} />
          </Layout>
        </Route>
        <Route exact path='/mks-dashboard-react/vehicles'>
          <Layout>
            <Vehicles />
          </Layout>
        </Route>
        <Route exact path='/mks-dashboard-react/buildings'>
          <Layout>
            <Buildings />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
