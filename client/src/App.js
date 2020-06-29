import React, { Component } from "react";
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from "./logo.svg";
import Home from './Views/Home';
import Login from './Views/Login';
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <Navbar />
          </header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
