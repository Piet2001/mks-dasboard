import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home"
import Vehicles from "./components/Vehicles/Vehicles"
import Buildings from "./components/Buildings/Buildings"

import './App.css';

function App() {
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
      </Switch>
    </Router>
  );
}

export default App;
