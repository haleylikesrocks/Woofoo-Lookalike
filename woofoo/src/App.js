import CurrentForm from "./components/CurrentForm";
import NavBar from "./components/NavBar";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import * as actionCreator from "./actions/actionCreator";
import ButtonList from "./data/buttonList";
import EditInputs from "./components/EditInput";
import FieldButtons from "./components/FieldButtons";

function mapStateToProps(state) {
    return {
        currentFields: state.formData.currentFields,
        formId: state.formData.formId,
        editing: state.formData.editing,
        savedForms: state.savedForms,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addField: (type) => dispatch(actionCreator.addField(type)),
        removeField: (index) => dispatch(actionCreator.removeField(index)),
        updateField: (index, fieldSetting) => dispatch(actionCreator.updateField(index, fieldSetting)),
        beginEditing: (index) => dispatch(actionCreator.beginEditing(index)),
        saveForm: (currentFields, formId) =>
            dispatch(actionCreator.saveFormAsync(currentFields, formId)),
        createForm: (formId) => dispatch(actionCreator.createForm(formId)),
        loadForm: (formId, savedForms) =>
            dispatch(actionCreator.loadFormAsync(formId, savedForms)),
        syncForms: () => dispatch(actionCreator.loadFormsFromDB()),
    };
}

const FormApp = ({
    addField,
    currentFields,
    formId,
    removeField,
    updateField,
    beginEditing,
    saveForm,
    createForm,
    savedForms,
    history,
    syncForms,
    editing,
}) => {
    // synchronize forms with db and redux state
    useEffect(() => {
       syncForms(); 
    }, [savedForms.length]);

    return (
        <>
            <NavBar createForm={createForm} savedForms={savedForms} />
            <FieldButtons buttonList={ButtonList} addField={addField} />
            {editing.currentlyEditing && <EditInputs selectedField={currentFields[editing.editIndex]} index={editing.editIndex} updateField={updateField}/>}
            <CurrentForm
                currentFields={currentFields}
                formId={formId}
                removeField={removeField}
                saveForm={saveForm}
                beginEditing={beginEditing}
                history={history}
            />
        </>
    );
};

const App = connect(mapStateToProps, mapDispatchToProps)(FormApp);

export default App;
