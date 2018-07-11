import React, { Component } from 'react';
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import UserDetail from "../components/UserDetail";

class Detail extends Component {
    // methods



    // JSX
  render() {
    return (
    <div>
        <Nav/>
        <UserDetail/>
        <Footer/>
    </div>    
    );
  }
}

export default Detail;