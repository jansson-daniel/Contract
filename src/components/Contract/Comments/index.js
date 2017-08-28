import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import styles from './styles.css';

export class Comment extends Component {
    constructor (props) {
        super(props);

        this.state = {
        };

        this.handlePost = this.handlePost.bind(this);
    }

    handlePost (event) {
        event.preventDefault();
        console.log(this.props.selection);
    }

    render () {
        return (
            <section className="comment">
                <h2 className="sub-heading">Comments</h2>
                <form action="#">
                    <textarea className="text-area"></textarea>
                    <button className="post-button" onClick={this.handlePost}>Post Comment</button>
                </form>
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
