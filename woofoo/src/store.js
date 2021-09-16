import { createStore } from 'redux';
import rootReducer from "./reducers/index";
import addFields from './reducers/addFields';


const defaultState = {
    currentFields: [], // { type: input_type, field_settings: {} }
};


const store = createStore(addFields, defaultState);


export default store;