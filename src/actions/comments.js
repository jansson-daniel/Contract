export const addComment = (comment) => (dispatch) => {
    dispatch({
        type: 'ADD',
        payload: comment
    })
};