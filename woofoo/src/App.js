import CurrentForm from "./components/CurrentForm";
import NavBar from "./components/NavBar";
import AddAField from "./components/AddAField";
import { connect } from "react-redux";
import React from "react";
import * as actionCreator from "./actions/actionCreator";
import ButtonList from "./data/buttonList";

function mapStateToProps(state) {
  return {
    currentFields: state.formData.currentFields,
    formId: state.formData.formId,
    savedForms: state.savedForms,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addField: (type) => dispatch(actionCreator.addField(type)),
    removeField: (index) => dispatch(actionCreator.removeField(index)),
    saveForm: (currentFields, name) =>
      dispatch(actionCreator.saveForm(currentFields, name)),
    createForm: (formId) => dispatch(actionCreator.createForm(formId)),
    loadForm: (formId, savedForms) => dispatch(actionCreator.loadForm(formId, savedForms)),
  };
}

class FormApp extends React.Component {
  render() {
    const {
      addField,
      currentFields,
      formId,
      removeField,
      saveForm,
      createForm,
      savedForms,
    } = this.props;
    return (
      <>
        <NavBar createForm={createForm} savedForms={savedForms} />
        {Object.keys(ButtonList).map((type, index) => (
          <AddAField
            key={index}
            type={type}
            title={ButtonList[type]}
            addField={addField}
          />
        ))}
        <CurrentForm
          currentFields={currentFields}
          formId={formId}
          removeField={removeField}
          saveForm={saveForm}
          history={this.props.history}
        />
      </>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(FormApp);

export default App;
