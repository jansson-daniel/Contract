import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { selection } from '../../../actions/agreement';
import styles from './styles.css';

export class Tooltip extends Component {
    constructor (props) {
        super(props);

        this.state = {
        };

        this.makeSelection = this.makeSelection.bind(this);
    }

    makeSelection () {
        this.props.dispatch(selection(true));
    }

    render () {
        return (
            <div onClick={this.makeSelection} className="tooltip">
            </div>
        )
    }
}

Tooltip.propTypes = {
    dispatch: PropTypes.func
};

export default connect()(Tooltip)
