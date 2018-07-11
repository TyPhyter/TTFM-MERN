import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReviewForm from "../components/ReviewForm";

class Review extends Component {
  render() {
    return (
      <div className>
        <Navbar/>
        <ReviewForm/>  
        <Footer/>
    </div>
    );
  }
}

export default Review;