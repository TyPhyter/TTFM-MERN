import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import All from "./components/pages/All";
import Create from "./components/pages/Create";
import Dashboard from "./components/pages/Dashboard";
import Detail from "./components/pages/Detail";
import Review from "./components/pages/Review";
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
