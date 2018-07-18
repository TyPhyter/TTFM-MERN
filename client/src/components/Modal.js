import React, { Component } from "react";

class Modal extends Component {
    render() {
        return (
            <div>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4 className="center-align">New Badge!</h4>
                        <p className="center-align">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aspernatur fugiat corporis accusamus cumque illum ea odio provident distinctio perspiciatis ab, saepe facilis vero quia amet deserunt, quam praesentium earum.</p>
                    </div>
                    <div className="divider"></div>
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
