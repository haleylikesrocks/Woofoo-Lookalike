import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/index";
import uniqid from 'uniqid';
import thunk from 'redux-thunk';

const defaultState = {
    formData: {
        formId: uniqid(),
        currentFields: [],
        editing: {
            currentlyEditing: false,
            editIndex: 0
        }
    },
    savedForms: [],
};

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));

const loadedState = null;//  loadState();
const state = ((loadedState && loadedState.formData && loadedState.savedForms) ? loadedState : defaultState);
const store = createStore(rootReducer, state, composedEnhancers);

// store.subscribe(() => persistState(store.getState()));
if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
}

export default store;
