export const copyToClipboard = (bool) => (dispatch) => {
    dispatch({
        type: 'COPY_TO_CLIPBOARD',
        payload: bool
    })
};