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
        this.tooltip.style.left = nextProps.position.x -130 + 'px';
        this.tooltip.style.top = nextProps.position.y -100 + 'px';
    }

    makeSelection () {
        this.setState({ selection: '' });
        this.props.dispatch(copyToClipboard(true));
    }

    render () {
        return (
            <div className="tooltip-wrapper" ref={(tooltip) => { this.tooltip = tooltip; }}>
                {(() => {
                    if (this.props.showTooltip === true) {
                        return (
                            <div>
                                <div onClick={this.makeSelection} className="tooltip">
                                    <img className="edit" src="images/editicon.png" />
                                    <img className="speech-bubble" src="images/speachbubble.png" />
                                    <symbol className="twitter">
                                        <img src="images/twitter.png" />
                                    </symbol>
                                    <img className="lock" src="images/lock.png" />
                                </div>
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

const mapStateToProps = (state) => ({
    selection: state.agreement.selection,
    position: state.agreement.position,
    showTooltip: state.agreement.showTooltip
});

export default connect(mapStateToProps)(Tooltip)
