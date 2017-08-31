import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './styles.css';

export class Corporation extends Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    render () {
        return (
            <div className='corporation'>
                <img className="logotype" src="images/oneflow.png" />
                <div className="customer-info">
                    <span className="name">Oneflow AB</span>
                    <span className="reg-no">Reg. No. 5569032989</span>
                    <span className="contact">Peramanathan Satyamoorthy</span>
                    <span className="role">Developer</span>
                    <span className="signatory">Signatory</span>
                    <div className="action-wrapper">
                        <i className="fa fa-plus add-icon" />
                        <span className="add-participant">Add Collegue</span>
                    </div>
                </div>
                <div className="customer-info">
                    <span className="name">Oneflow AB</span>
                    <span className="reg-no">Reg. No. 5569032989</span>
                    <span className="contact">Testing Ninja</span>
                    <span className="signatory">Signatory</span>
                    <div className="action-wrapper">
                        <i className="fa fa-plus add-icon" />
                        <span className="add-participant">Add participant</span>
                    </div>
                </div>
                <div className="sign-box">
                    <div className="action-wrapper">
                        <i className="fa fa-plus add-icon" />
                        <span className="add-participant">Add participant in another company</span>
                    </div>
                    <button className="sign-button">
                        <div className="sign-button-wrapper">
                            <img src="images/checkmark.png" />
                            <span>Sign contract</span>
                        </div>
                    </button>
                    <div className="action-wrapper">
                        <i className="fa fa-share add-icon" />
                        <span className="add-participant">Delegate my signing rights</span>
                    </div>
                    <p className="valid">The offer is valid until <span>2017-09-21</span> (18 days left)</p>
                    <div className="action-wrapper">
                        <i className="fa fa-download add-icon" />
                        <span className="download">Download as PDF</span>
                    </div>
                    <div className="tag-wrapper">
                        <i className="fa fa-tag tag-icon" />
                        <span className="tag">Tags</span>
                    </div>
                    <div className="imported-wrapper">
                        <span className="tag">imported</span>
                        <i className="fa fa-times" />
                    </div>
                    <div className="action-wrapper">
                        <i className="fa fa-plus add-tag-icon" />
                        <span className="add-tag">Add Tag</span>
                    </div>
                </div>
            </div>
        )
    }
}

Corporation.propTypes = { dispatch: PropTypes.func };

export default connect()(Corporation)
