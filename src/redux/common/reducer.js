import { SET_SELECTED_SORT_ID } from "./actions"

const initialState = {
    selectedId: 0,
}

export const common = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_SORT_ID:
            return {
                ...state,
                selectedId: action.selectedId
            }
        default:
            return state;
    }
}