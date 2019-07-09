import React, { Component } from "react";
import "./Navbar.scss";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

export default class Navbar extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul className="navList">
            <li className="navElement">
              <Link to="/login">Login</Link>
            </li>
            <li className="navElement">
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Router>
    );
  }
}
