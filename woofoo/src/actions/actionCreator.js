import { add_field, remove_field, edit_field, save_form } from "./action-types";

export function addField(type) {
    return {
        actionType: add_field,
        type,
        fieldSettings: {},
    }
};

export function removeField(index) {
    return {
        actionType: remove_field,
        type: remove_field,
        fieldSettings: {},
        index
    }
};

export function editField(type, index) {
    return {
        actionType: edit_field,
        type,
        fieldSettings: {},
        index
    }
};


export function saveForm(currentFields, name = "Untitled") {
    return {
        type: save_form,
        currentFields,
        name
    }
}

