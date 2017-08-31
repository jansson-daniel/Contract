import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { hideTooltip } from '../../../../actions/tooltip';
import styles from './styles.css';

export class ListItem extends Component {
    constructor (props) {
        super(props);

        this.state = {
            timeLaps: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount () {
        this.setState({ timeLaps: Math.round((Date.now() - this.props.comment.timestamp) / 60000) });

        setInterval(() => {
            let timeLaps = this.state.timeLaps + 1;
            this.setState({ timeLaps });
        }, 60000);
    }

    handleClick () {
        if (typeof this.props.comment.selectionRange.startContainer !== 'undefined') {
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(this.props.comment.selectionRange);
            selection.getRangeAt(0).startContainer.parentNode.scrollIntoView();
            this.props.dispatch(hideTooltip());
        }
    }

    render () {
        return (
            <li onClick={this.handleClick} className="list-item">
                <p className="sender-receiver">From:
                    <span className="sender">Peramanathan Sathyamoorthly</span> To:
                    <span className="receiver">Testing Ninja</span>
                    <span className="timestamp">{this.state.timeLaps} minutes ago</span>
                </p>
                <p className="message">
                    <span className="subject">Subject: </span>
                    Contract
                </p>
                {this.props.comment.message}
            </li>
        )
    }
}

ListItem.propTypes = { dispatch: PropTypes.func };

const mapStateToProps = (state) => ({
   comments: state.comments.list
});

export default connect(mapStateToProps)(ListItem)
