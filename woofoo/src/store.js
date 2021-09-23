import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/index";
import uniqid from 'uniqid';
import thunk from 'redux-thunk';
import { loadState, persistState } from './persistence/util';

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
    authDetails: {
        isSignedIn: false,
        username: "",
        provider: '',
    }
};

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));

// restore session form data from local storage if present
const formData = loadState();
let state = (formData) ? ({
    ...defaultState,
    formData: {
        ...defaultState.formData,
        ...formData
    }
}) : defaultState;

const store = createStore(rootReducer, state, composedEnhancers);

// subscribe to changes in session
store.subscribe(() => persistState(store.getState().formData));
if (process.env.NODE_ENV !== 'production' && module.hot) {
    console.log("hot reloading...");
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
}

export default store;
