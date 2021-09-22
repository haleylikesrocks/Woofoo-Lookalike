import {
    readSavedForms,
} from "../firebaseConfig";
import { set, get, child, getDatabase, ref } from "firebase/database";
import {
    add_field,
    remove_field,
    save_form,
    create_new_form,
    load_form,
    sync_saved_forms,
    begin_editing,
    update_field,
} from "./action-types";
import { FORM_SAVED_STATE } from "../persistence/util";

export function addField(type) {
    return {
        actionType: add_field,
        type,
        fieldSettings: {},
    };
}

export function removeField(index) {
    return {
        actionType: remove_field,
        type: remove_field,
        fieldSettings: {},
        index,
    };
}

export function updateField(index, fieldSettings) {
    return {
        actionType: update_field,
        type: update_field,
        fieldSettings,
        index
    }
};

export function beginEditing(index) {
    return {
        actionType: begin_editing,
        type: begin_editing,
        index
    }
};

export function saveFormAsync(currentFields, formId, name = "Untitled") {
    return async (dispatch) => {
        const formRef = ref(
            getDatabase(),
            FORM_SAVED_STATE + `/savedForms/${formId}`
        );
        set(formRef, {
            currentFields,
            formId,
            name,
        });
        console.log("set the db");
        dispatch(saveForm(currentFields, formId, name));
    };
}

export function saveForm(currentFields, formId, name = "Untitled") {
    return {
        type: save_form,
        currentFields,
        formId,
        name,
    };
}

export function createForm(formId) {
    return {
        actionType: create_new_form,
        type: create_new_form,
        formId,
    };
}

export function loadFormsFromDB() {
    return async (dispatch) => {
        try {
            const result = await readSavedForms();
            // entries are returned as [key, value], so map to value
            let mapped = Object.entries(result).map(result => { 
                const savedForm = result[1];
                if (!savedForm.currentFields) {
                    savedForm['currentFields'] = [];
                }
                return savedForm;
            });
            dispatch(syncSavedForms(mapped));
        } catch (error) {
            throw new Error(error);
        }
    };
}

export function syncSavedForms(savedForms) {
    return {
        type: sync_saved_forms,
        savedForms,
    };
}

export function loadFormAsync(formId, savedForms) {
    return (dispatch) => {
        const formRef =
            (getDatabase(), FORM_SAVED_STATE + `/savedForms/${formId}`);
        dispatch(loadForm(formId, savedForms));
    };
}

export function loadForm(formId, savedForms) {
    return {
        actionType: load_form,
        type: load_form,
        formId,
        savedForms,
    };
}
