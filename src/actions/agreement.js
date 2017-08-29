export const saveSelection = (selection) => (dispatch) => {
    dispatch({
        type: 'SAVE_SELECTION',
        payload: selection
    })
};

export const savePosition = (position) => (dispatch) => {
    dispatch({
        type: 'SAVE_POSITION',
        payload: position
    })
};