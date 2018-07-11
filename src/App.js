import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import All from "./pages/All";
// import Create from "./pages/Create";
// import Dashboard from "./pages/Dashboard";
// import Detail from "./pages/Detail";
import Review from "./pages/Review";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => (
   <Router>
    <div>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/all" component={All} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/dashboard" component={Dashboard} /> */}
        {/* <Route exact path="/detail" component={Detail} /> */}
        <Route exact path="/review" component={Review} />
      </Switch>
      <Footer/>
    </div>
  </Router>
  
)

export default App;
