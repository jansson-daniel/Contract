import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Agreement from './Agreement';
import Comments from './Comments';
import Corporation from './Corporation';
import styles from './styles.css';

export class Contract extends Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    render () {
        return (
            <div>
                <div className='contract'>
                    <Agreement />
                    <Comments />
                </div>
                <div className="company">
                    <Corporation />
                </div>
            </div>
        )
    }
}

Contract.propTypes = { dispatch: PropTypes.func };

export default connect()(Contract)
