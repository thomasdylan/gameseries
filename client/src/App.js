import React, { Component } from "react";
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from "./logo.svg";
import Home from './Views/Home';
import Login from './Views/Login';
import Register from './Views/Register';
import "./App.scss";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
          </div>
          <div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
