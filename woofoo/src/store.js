import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/index";
import uniqid from 'uniqid';
import { loadState, persistState } from './persistence/util';

const defaultState = {
    formData: {
        formId: uniqid(),
        currentFields: []
    },
    savedForms: [],
};


const composedEnhancers = composeWithDevTools();

const loadedState = loadState();
const state = (loadedState && loadedState.formData && loadState.savedForms) ? loadedState : defaultState;
const store = createStore(rootReducer, state, composedEnhancers);

store.subscribe(() => persistState(store.getState()));

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
}

export default store;
