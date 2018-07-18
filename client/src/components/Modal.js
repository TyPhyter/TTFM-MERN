import React, { Component } from "react";
import AppContext from '../AppContext';

class Modal extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {context => {
                    return (
                        <div>
                            <div id="modal1" className="modal">
                                <div className="modal-content">
                                    <h4 className="center-align">New Badge!</h4>
                                    <h3>{context.modalContent.name}</h3>
                                    <p className="center-align">{context.modalContent.message}</p>
                                </div>
                                <div className="divider"></div>
                                <div className="modal-footer">
                                    <button className="btn btn-large" onClick={() => { context.toggleModal() }}>CLOSE</button>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </AppContext.Consumer>
        )
    }
}

export default Modal;
