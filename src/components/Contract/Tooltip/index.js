import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { selection } from '../../../actions/agreement';
import { copyToClipboard } from '../../../actions/tooltip';
import styles from './styles.css';

export class Tooltip extends Component {
    constructor (props) {
        super(props);

        this.state = {
            selection: {}
        };

        this.makeSelection = this.makeSelection.bind(this);
    }

    componentWillReceiveProps (nextProps) {
        this.setState({ selection: nextProps.selection });
    }

    makeSelection () {
        this.setState({ selection: '' });
        this.props.dispatch(copyToClipboard(true));
    }

    render () {
        return (
            <div>
                {(() => {
                    if (this.props.selection === this.state.selection) {
                        return (
                            <div onClick={this.makeSelection} className="tooltip">
                                <img className="edit" src="images/editicon.png" />
                                <img className="speech-bubble" src="images/speachbubble.png" />
                                <symbol className="twitter">
                                    <img src="images/twitter.png" />
                                </symbol>
                                <img className="lock" src="images/lock.png" />
                            </div>
                        );
                    } else {
                        return null;
                    }
                })()}
            </div>
        )
    }
}

Tooltip.propTypes = {
    dispatch: PropTypes.func
};

function mapStateToProps (state) {
    return {
        selection: state.agreement.selection
    }
}

export default connect(mapStateToProps)(Tooltip)
