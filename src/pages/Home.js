import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Landing from "../components/Landing";

 class Home extends Component {
  render() {
    return (
    <div>
        <Navbar/>
        <Landing/>
        <Footer/>
    </div>
    );
  }
}

export default Home;
