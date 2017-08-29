import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import styles from './styles.css';

export class ListItem extends Component {
    constructor (props) {
        super(props);

        this.state = {};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(this.props.comment.selectionRange);
        window.scrollTo(this.props.comment.position.x, this.props.comment.position.y);
    }

    render () {
        return (
            <li onClick={this.handleClick} className="list-item">
                {this.props.comment.message}
            </li>
        )
    }
}

ListItem.propTypes = {
    dispatch: PropTypes.func
};

function mapStateToProps (state) {
    return {
        comments: state.comments.list
    }
}

export default connect(mapStateToProps)(ListItem)
