import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SavedForms from "./components/SavedForms";
import { Provider } from "react-redux";
import store from "./store";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

const FormApp = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} />
                <Route path='/savedforms' component={SavedForms}/>
                <Route path='/:formId' component={App}/>
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(FormApp, document.getElementById("root"));
