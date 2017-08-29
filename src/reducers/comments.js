import { handleActions } from 'redux-actions'

export default handleActions({
    ADD_COMMENT: (state, action) => {
        let items = [...state.list];
        items.push(action.payload);
        return {
            ...state,
            list: items
        }
    }
}, {
    list: []
})
