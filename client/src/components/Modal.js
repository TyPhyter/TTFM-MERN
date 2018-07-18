import React, { Component } from "react";
import { Link } from "react-router-dom";

class Modal extends Component {
  render() {
    return (
        <div>
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4 className="center-align">Welcome Back</h4>
                    <p className="center-align">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aspernatur fugiat corporis accusamus cumque illum ea odio provident distinctio perspiciatis ab, saepe facilis vero quia amet deserunt, quam praesentium earum.</p>
                </div>
                <div className="divider"></div>
                <div className="modal-footer">
                <Link to="/dashboard" className="waves-effect waves-light btn-flat"><i className="material-icons right">chevron_right</i>My Profile</Link>
                <Link to="/all" className="waves-effect waves-light btn-flat"><i className="material-icons right">chevron_right</i>See Available Project</Link>
                </div>
            </div>
        </div>
    );
  }
}

export default Modal;
