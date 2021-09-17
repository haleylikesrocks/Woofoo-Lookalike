import CurrentForm from './components/CurrentForm';
import NavBar from './components/NavBar';
import AddAField from './components/AddAField';
import { add_single_line_type, add_checkbox } from './actions/action-types';
import { connect } from "react-redux";
import React from 'react';
import * as actionCreator from "./actions/actionCreator";
import ButtonList from './data/buttonList';

function mapStateToProps(state) {
  return {
    currentFields: state.currentFields,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addField: (type) => dispatch(actionCreator.addField(type)),
    removeField: (index) => dispatch(actionCreator.removeField(index)),
  };
}

class FormApp extends React.Component {

  render() {

    const { addField, currentFields, removeField } = this.props;
  return (
    <div>
      <NavBar />
      {Object.keys(ButtonList).map((type, index) =>  <AddAField key={index} type={type} title={ButtonList[type]} addField={addField}/>)}
      <CurrentForm fields={currentFields} removeField={removeField}/> 
    </div>
  );
} 
}


const App = connect(mapStateToProps, mapDispatchToProps)(FormApp);

export default App;
