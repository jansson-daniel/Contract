import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import items from './items';
import agreement from './agreement';
import comments from './comments';

export default combineReducers({
    routeReducer,
    items,
    agreement,
    comments
})
