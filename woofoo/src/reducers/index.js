import { combineReducers } from "redux";
import formDataReducer from "./addFields";
import savedFormsReducer from './saveforms';
import signInReducer from './signin';

export default combineReducers({
    formData: formDataReducer,
    savedForms: savedFormsReducer,
    authDetails: signInReducer,
});
