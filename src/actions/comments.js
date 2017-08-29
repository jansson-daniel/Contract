export const addComment = (comment) => (dispatch) => {
    dispatch({
        type: 'ADD_COMMENT',
        payload: comment
    })
};