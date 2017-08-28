import { handleActions } from 'redux-actions'

export default handleActions({
    SAVE_SELECTION: (state, action) => {
        return {
            ...state,
            selection: action.payload
        }
    }
}, {
    selection: {}
})
