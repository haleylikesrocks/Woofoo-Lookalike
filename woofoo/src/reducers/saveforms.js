import { save_form, load_form } from "../actions/action-types";
import { loadForm } from "../actions/actionCreator";

function saveForm(state, action) {
// save current fields of form into savedforms state
      const index = state.findIndex((form) => form.formId === action.formId);
      if (index === -1) {
        return [
          ...state,
          {
            currentFields: action.currentFields,
            formId: action.formId,
            name: action.name
          },
        ];
      } else if (index === 0) {
        return [
          {
            ...state[index],
            currentFields: action.currentFields,
            name: action.name
          },
          ...state.slice(index + 1),
        ];
      } else {
        return [
          ...state.slice(0, index),
          {
            formId: action.formId,
            currentFields: action.currentFields,
            name: action.name
          },
          ...state.slice(index + 1),
        ];
      }
}

export default function saveFormsReducer(state = [], action) {
  switch (action.type) {
    case save_form:
      return saveForm(state, action);
    default:
      return state;
  }
}
