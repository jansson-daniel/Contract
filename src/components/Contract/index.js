import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Agreement from './Agreement';
import Comments from './Comments';
import styles from './styles.css';

export class Contract extends Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    render () {
        console.log(styles);

        return (
            <div className='contract'>
                <Agreement />
                <Comments />
            </div>
        )
    }
}

Contract.propTypes = {
    dispatch: PropTypes.func
};

export default connect()(Contract)
