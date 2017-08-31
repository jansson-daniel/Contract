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
            <div className="wrapper">
                <section className='contract'>
                    <Agreement />
                    <Comments />
                </section>
                <aside className="company">
                    <Corporation />
                </aside>
            </div>
        )
    }
}

Contract.propTypes = { dispatch: PropTypes.func };

export default connect()(Contract)
