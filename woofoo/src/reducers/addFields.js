import * as actionTypes from "../actions/action-types";

function loadFormReducer(state, action) {
    const { savedForms, formId } = action;
    const formToLoad = savedForms.find(form => form.formId === formId);

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
                        fieldSettings: {
                            title: 'Untitled this is mine',
                            instructions: 'Please enter text',
                            choices: ['choice 1', 'choice 2', 'choice 3']
                        },
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
        case actionTypes.update_field:
            console.log(action.index);
            console.log("the title change is ", action.fieldSettings.title);
            if (action.index === undefined) {
                return state;
            }
            const newCurrentFields = state.currentFields.map((item, index) =>{
                if(index !== action.index) {
                    return item
                }
                return {
                    ...item,
                    fieldSettings: {
                        ...item.fieldSettings,
                        title: action.fieldSettings.title,
                        instructions: action.fieldSettings.instructions,
                        choices: action.fieldSettings.choices
                    }
                }
            });

            return {
                ...state,
                currentFields: newCurrentFields,
                begin_editing: {
                    ...state.begin_editing,
                    currentlyEditing:false
                }
            };

        case actionTypes.begin_editing:
            return{
                ...state,
                editing: {
                    currentlyEditing: true,
                    editIndex: action.index
                }
            }

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
