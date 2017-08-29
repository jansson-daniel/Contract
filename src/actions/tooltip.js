export const copyToClipboard = (bool) => (dispatch) => {
    dispatch({
        type: 'COPY_TO_CLIPBOARD',
        payload: bool
    })
};

export const hideTooltip = () => (dispatch) => {
    dispatch({
        type: 'HIDE_TOOLTIP',
        payload: null
    })
};