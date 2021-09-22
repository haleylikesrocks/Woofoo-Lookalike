import {
  add_field,
  remove_field,
  edit_field,
  save_form,
  create_new_form,
  load_form,
} from "./action-types";

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

export function editField(type, index) {
  return {
    actionType: edit_field,
    type,
    fieldSettings: {},
    index,
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

export function loadForm(formId, savedForms) {
  return {
    actionType: load_form,
    type: load_form,
    formId,
    savedForms,
  };
}
