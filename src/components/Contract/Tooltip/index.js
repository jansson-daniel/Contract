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
        const arrowHeight = 15;
        this.setState({ selection: nextProps.selection });
        this.tooltip.style.left = nextProps.position.left + (nextProps.position.width / 2 - 122) + 'px';
        this.tooltip.style.top = window.scrollY + nextProps.position.top - (this.tooltip.offsetHeight + arrowHeight) + 'px';
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
                                    <img className="edit" src="images/editicon.svg" />
                                    <img className="speech-bubble" src="images/speachbubble.svg" />
                                    <symbol className="twitter">
                                        <img src="images/twitter.svg" />
                                    </symbol>
                                    <img className="lock" src="images/lock.svg" />
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
