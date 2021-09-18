import * as actionTypes from "../actions/action-types";

export default function formDataReducer(state = {}, action) {
    const copy = { ...state };
    if (!state.formData) return state;

    const formDataCopy = { ...state.formData };
    const fieldsCopy = [...state.formData.currentFields];

    switch (action.actionType) {
        case actionTypes.add_field:
            fieldsCopy.push({ type: action.type, fieldSettings: {} });

            return {
                ...copy,
                formData: {
                    ...formDataCopy,
                    currentFields: fieldsCopy,
                },
            };
        case actionTypes.remove_field:
            if (action.index === undefined) {
                return state;
            }
            fieldsCopy.splice(action.index, 1);
            console.log("after:", fieldsCopy);

            return {
                ...copy,
                formData: {
                    ...formDataCopy,
                    currentFields: fieldsCopy,
                }
            };
        case actionTypes.remove_field:
            return state;
        case actionTypes.edit_field:
            return state;
        default:
            return state;
    }
}
