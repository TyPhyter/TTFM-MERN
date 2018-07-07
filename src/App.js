import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/layout/Home";
import All from "./components/layout/All";
import Create from "./components/layout/Create";
import Dashboard from "./components/layout/Dashboard";
import Detail from "./components/layout/Detail";
import Review from "./components/layout/Review";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <div className="container app-wrapper">
            <Route exact path="/all" component={All} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/detail" component={Detail} />
            <Route exact path="/review" component={Review} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
