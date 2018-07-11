import React, { Component } from 'react';


 class Create extends Component {
  render() {
    return (
    <div>
        <div className="container app-wrapper">
        <div className="row center-align">
              <h4>Post a Project</h4>
          </div>
          <div className="row">
              <form className="col s12">
                  <div className="row">
                      <div className="input-field col s12">
                          <input placeholder="A brief description of your project" id="project_title" type="text" className="validate"/>
                          <label for="project_title">Project Title</label>
                      </div>
                      <div className="input-field col s12">
                          <input placeholder="https://github.com/your_info" id="repoUrl" type="text" className="validate"/>
                          <label for="repoUrl">Repo URL:</label>
                      </div>
                      <div className="input-field col s12">
                          <input placeholder="https://yoursite.com/your_info" id="hostedUrl" type="text" className="validate"/>
                          <label for="hostedUrl">Hosted URL:</label>
                      </div>
                      <div className="input-field col s12">
                          <textarea style="height: 90px" id="bodyText" className="materialize-textarea" placeholder="Tell us how to interact with your project and what you want to know about it"></textarea>
                          <label for="bodyText">About your project</label>
                      </div>
                      <div className="input-field col s12 center-align">
                          <button className="btn btn-large" id="post">POST</button>
                          <a className="waves-effect waves-light btn btn-large modal-trigger" href="#repoPicker">Repo Picker</a>
                      </div>
                  </div>
              </form>
          </div>
          <div id="repoPicker" className="modal modal-fixed-footer">
              <div className="modal-content">
                  <h4>Choose a Repository</h4>

              </div>
              <div className="modal-footer">
                  <a href="#!" className="modal-close waves-effect waves-green btn">Choose</a>
                  <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
              </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Create;
