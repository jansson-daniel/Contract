import {routeActions} from 'redux-simple-router'

export const saveSelection = (selection) => (dispatch) => {
    dispatch({
        type: 'SAVE_SELECTION',
        payload: selection
    })
};