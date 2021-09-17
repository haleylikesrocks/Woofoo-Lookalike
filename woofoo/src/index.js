import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SavedForms from './components/SavedForms';
import { Provider } from 'react-redux';
import store from './store';
import { Route, Router, Switch } from 'react-router';

const FormApp = (
  <Provider store={store}>
    <Router>
    <Switch>
      <Route path='/' component={App}/>
      {/* <Route path='/savedforms' component={SavedForms}/> */}
      {/* <Route path='/:formId' component={App}/> */}
      </Switch>
      </Router>
  </Provider>
);

ReactDOM.render(
  FormApp,
  document.getElementById('root')
);
