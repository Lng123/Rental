import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Login from './components/top.component';
import Register from "./components/register.component";
import Home from './components/home.component';

function App() {
  return (
    <div>
    <Router>
      <Switch>
    <Route exact path="/"  component={Home} />
    <Route path="/register"  component={Register} />
    </Switch>
    </Router>
    </div>

  );
}

export default App;
