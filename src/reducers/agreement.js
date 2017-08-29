import { handleActions } from 'redux-actions'

export default handleActions({
    SAVE_SELECTION: (state, action) => {
        return {
            ...state,
            selection: action.payload
        }
    },
    COPY_TO_CLIPBOARD: (state, action) => {
        return {
            ...state,
            clipboard: action.payload
        }
    }
}, {
    selection: {},
    clipboard: false
})
