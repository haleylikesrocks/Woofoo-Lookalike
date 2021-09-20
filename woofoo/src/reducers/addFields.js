import * as actionTypes from "../actions/action-types";

function loadFormReducer(state, action) {
    const { savedForms, formId } = action;

    const formToLoad = savedForms.find(form => form.formId === formId);
    console.log(formToLoad);

    if (!formToLoad) {
        return state;
    } else {
        const { currentFields, formId, name } = formToLoad;

        return {
            ...state,
            currentFields,
            formId,
            name: name ? name : "Untitled",
        };
    }
}

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

        case actionTypes.create_new_form:
            return {
                currentFields: [],
                formId: action.formId,
            }
        case actionTypes.load_form:
            return loadFormReducer(state, action);
        default:
            return state;
    }
}
