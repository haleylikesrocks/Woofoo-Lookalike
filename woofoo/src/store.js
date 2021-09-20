import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/index";
import uniqid from 'uniqid';

const defaultState = {
    formData: {
        formId: uniqid(),
        currentFields: []
    },
    savedForms: [],
};


const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, defaultState, composedEnhancers);

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
}

export default store;
