import CurrentForm from './components/CurrentForm';
import NavBar from './components/NavBar';
import AddAField from './components/AddAField';
import { add_single_line_type, add_checkbox } from './actions/action-types';
import { connect } from "react-redux";
import React from 'react';
import * as actionCreator from "./actions/actionCreator";

function mapStateToProps(state) {
  return {
    currentFields: state.currentFields,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addField: (type) => dispatch(actionCreator.addField(type))
  };
}

const FormApp = ({
  addField,
  currentFields,
}) => {
  return (
    <div>
      <NavBar />
      <AddAField type={add_single_line_type} title={'Single Line Text'} addField={addField}/>
      <CurrentForm fields={currentFields} /> 
    </div>
  );
} 


const App = connect(mapStateToProps, mapDispatchToProps)(FormApp);

export default App;
