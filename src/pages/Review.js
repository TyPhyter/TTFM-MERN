import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Review extends Component {
  render() {
    return (
      <div className>
          <Navbar/>
          <div className="container app-wrapper">
        <h2 id="projectName">Project Title</h2>
        <div className="row">
            <div className="col s12">
                <div className="card">
                    <div className="row">
                        <div className="card-header">
                            <h2 className="feedback-heading">How Did It Go?</h2>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <ul>
                                        <li className="col s4">
                                            <label>
                                                <input className="with-gap" name="group3" type="radio" value="5" />
                                                <span>Everything worked!</span>
                                            </label>
                                        </li>
                                        <li className="col s4">
                                            <label>
                                                <input className="with-gap" name="group3" type="radio" value="3" />
                                                <span>Looks good, but has a few issues.</span>
                                            </label>
                                        </li>
                                        <li className="col s4">
                                            <label>
                                                <input className="with-gap" name="group3" type="radio" value="1" />
                                                <span>So broke, it eats sleep for dinner.</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                                        <label for="textarea1">Specific Feedback and Comments</label>
                                    </div>
                                </div>
                                <button className="btn waves-effect waves-light btn-small" type="submit" name="action">Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
    );
  }
}

export default Review;