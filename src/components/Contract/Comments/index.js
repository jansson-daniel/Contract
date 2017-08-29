import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { addComment } from '../../../actions/comments';
import List from './List';
import styles from './styles.css';

export class Comment extends Component {
    constructor (props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handlePost = this.handlePost.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.clipboard === true) {
            this.textInput.focus();
        }
    }

    handleChange (event) {
        this.setState({ value: event.target.value });
    }

    handlePost (event) {
        event.preventDefault();

        const comment = {
            message: this.state.value,
            selectionRange: this.props.selection,
            position: this.props.position
        };

        this.setState({ value: '' });
        this.props.dispatch(addComment(comment));
    }

    render () {
        return (
            <section className="comment">
                <h2 className="sub-heading">Comments</h2>
                <form action="#">
                    <textarea ref={(input) => { this.textInput = input; }} onChange={this.handleChange} className="text-area" value={this.state.value} />
                    <button className="post-button" onClick={this.handlePost}>Post Comment</button>
                </form>
                <List />

            </section>
        )
    }
}

Comment.propTypes = {
    dispatch: PropTypes.func
};

function mapStateToProps (state) {
    return {
        selection: state.agreement.selection,
        clipboard: state.agreement.clipboard,
        position: state.agreement.position
    }
}

export default connect(mapStateToProps)(Comment)
