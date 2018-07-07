import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
//import Landing from "./components/layout/Landing";
//import Login from "./components/auth/Login";
//import Register from "./components/auth/Register";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          
          <div className="container app-wrapper">
            <h1>Hello World</h1>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
