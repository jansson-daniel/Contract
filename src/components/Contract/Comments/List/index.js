import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import ListItem from '../ListItem';
import styles from './styles.css';

export class List extends Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    componentWillReceiveProps () {
    }

    render () {
        console.log(this.props.comments)
        return (
            <ul className="list">
                {this.props.comments.map((item, index) =>
                    <ListItem
                        key={index}
                        comment={item}
                    />
                )}
            </ul>
        )
    }
}

List.propTypes = {
    dispatch: PropTypes.func
};

function mapStateToProps (state) {
    return {
        comments: state.comments.list
    }
}

export default connect(mapStateToProps)(List)
