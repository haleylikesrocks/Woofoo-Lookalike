import { createStore } from 'redux';
import rootReducer from "./reducers/index";
import addFields from './reducers/addFields';
import uniqid from 'uniqid';

const defaultState = {
    formData: {
        formId: uniqid(),
        currentFields: []
    },
    savedForms: [],
};


const store = createStore(addFields, defaultState);


export default store;