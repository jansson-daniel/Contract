import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { addComment } from '../../../actions/comments';
import { hideTooltip } from '../../../actions/tooltip';
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
        this.handleFocus = this.handleFocus.bind(this);
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.clipboard === true) {
            this.textInput.focus();
            this.props.dispatch(hideTooltip());
        }
    }

    handleChange (event) {
        this.setState({ value: event.target.value });
    }

    handleFocus () {
        this.props.dispatch(hideTooltip());
    }

    handlePost (event) {
        event.preventDefault();

        if (this.state.value.length === 0) return;

        const comment = {
            message: this.state.value,
            selectionRange: this.props.selection,
            position: this.props.position,
            timestamp: Date.now()
        };

        this.setState({ value: '' });
        this.props.dispatch(addComment(comment));
    }

    render () {
        return (
            <section className="comment">
                <h2 className="sub-heading">Comments</h2>
                <form className="form" action="#">
                    <div className="textarea-header">
                        <span className="send-to">Send to:</span>
                        <select>
                            <option value="Testing Ninja">Testing Ninja</option>
                        </select>
                    </div>
                    <textarea
                        ref={(input) => { this.textInput = input; }}
                        onFocus={this.handleFocus}
                        onChange={this.handleChange}
                        className="text-area"
                        placeholder="Write a comment..."
                        value={this.state.value}
                    />
                    <button className="post-button" onClick={this.handlePost}>Post Comment</button>
                </form>
                <List />
            </section>
        )
    }
}

Comment.propTypes = { dispatch: PropTypes.func };

const mapStateToProps = (state) => ({
    selection: state.agreement.selection,
    clipboard: state.agreement.clipboard,
    position: state.agreement.position
});

export default connect(mapStateToProps)(Comment)
