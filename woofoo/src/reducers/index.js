import { combineReducers } from "redux";
import formDataReducer from "./addFields";
import savedFormsReducer from './saveforms';

export default combineReducers({
    formData: formDataReducer,
    savedForms: savedFormsReducer
});
