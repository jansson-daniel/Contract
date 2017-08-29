import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import agreement from './agreement';
import comments from './comments';

export default combineReducers({
    routeReducer,
    agreement,
    comments
})
