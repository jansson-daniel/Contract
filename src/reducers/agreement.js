import { handleActions } from 'redux-actions'

export default handleActions({
    SAVE_SELECTION: (state, action) => {
        return {
            ...state,
            selection: action.payload,
            showTooltip: true
        }
    },
    SAVE_POSITION: (state, action) => {
        return {
            ...state,
            position: action.payload,
            showTooltip: false
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
    clipboard: false,
    position: {},
    showTooltip: false
})
