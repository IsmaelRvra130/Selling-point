import React from 'react';

import Button from '@material-ui/core/Button';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  return (
    <div className="App">
      <Home>
        <Navbar />
        </Home> 
      {/* <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path= "/" component={ Home } />
          </Switch>
        </div>
      </Router> */}
      <Button variant="contained" color="primary">
      Hello World
      </Button>
    </div>
  );
}


export default App;
