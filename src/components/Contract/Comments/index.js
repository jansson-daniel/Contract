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

    componentWillReceiveProps () {
    }

    handleChange (event) {
        this.setState({ value: event.target.value });
    }

    handlePost (event) {
        event.preventDefault();

        const comment = {
            message: this.state.value,
            selectionRange: this.props.selection
        };

        this.setState({ value: '' });
        this.props.dispatch(addComment(comment));
        //const selection = window.getSelection();
        //selection.removeAllRanges();
        //selection.addRange(this.props.selection);
        console.log(this.props.selection);
    }

    render () {
        return (
            <section className="comment">
                <h2 className="sub-heading">Comments</h2>
                <form action="#">
                    <textarea onChange={this.handleChange} className="text-area" value={this.state.value} />
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
        selection: state.agreement.selection
    }
}

export default connect(mapStateToProps)(Comment)
