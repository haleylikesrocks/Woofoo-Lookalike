import * as actionTypes from "../actions/action-types";

export default function formDataReducer(state = {}, action) {
    if (!state?.currentFields) {
        return state;
    }       

    switch (action.actionType) {
        case actionTypes.add_field:

            return {
                ...state,
                currentFields: [
                    ...state.currentFields,
                    {
                        type: action.type,
                        fieldSettings: {},
                    }
                ],
            };
        case actionTypes.remove_field:
            if (action.index === undefined) {
                return state;
            }

            return {
                ...state,
                currentFields: [
                    ...state.currentFields.slice(0, action.index),
                    ...state.currentFields.slice(action.index + 1)
                ],
            };
        case actionTypes.edit_field:
            return state;
        default:
            return state;
    }
}
