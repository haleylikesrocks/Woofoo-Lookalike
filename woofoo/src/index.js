import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SavedForms from "./components/SavedForms";
import { Provider } from "react-redux";
import store from "./store";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import { loadFormAsync } from "./actions/actionCreator";
import { readSavedForms } from "./firebaseConfig";

const renderSavedForms = () => {
    const result = readSavedForms();
    console.log(result);
    const savedForms = store.getState().savedForms;
    return (
        <SavedForms
            savedForms={savedForms}
            loadForm={(formId, savedForms) =>
                store.dispatch(loadFormAsync(formId, savedForms))
            }
        />
    );
};

const FormApp = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/savedforms" component={renderSavedForms} />
                <Route path="/:formId" component={App} />
                <Route path="*" component={Error} />
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(FormApp, document.getElementById("root"));
