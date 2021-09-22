import CurrentForm from "./components/CurrentForm";
import NavBar from "./components/NavBar";
import { connect } from "react-redux";
import React, { useContext, useEffect, useState } from "react";
import * as actionCreator from "./actions/actionCreator";
import ButtonList from "./data/buttonList";
import EditInputs from "./components/EditInput";
import FieldButtons from "./components/FieldButtons";

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
        saveForm: (currentFields, formId) =>
            dispatch(actionCreator.saveFormAsync(currentFields, formId)),
        createForm: (formId) => dispatch(actionCreator.createForm(formId)),
        //    loadForm: (formId, savedForms) =>
        //      dispatch(actionCreator.loadForm(formId, savedForms)),
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
    saveForm,
    createForm,
    savedForms,
    history,
    syncForms,
}) => {
    const [editing, setEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const editHere = (index) => {
        setCurrentIndex(index);
        setEditing(true);
    };

    // synchronize forms with db and redux state
    useEffect(() => {
       syncForms(); 
    }, [savedForms.length]);

    return (
        <>
            <NavBar createForm={createForm} savedForms={savedForms} />
            <FieldButtons buttonList={ButtonList} addField={addField} />
            {editing && (
                <EditInputs selectedField={currentFields[currentIndex]} />
            )}
            <CurrentForm
                currentFields={currentFields}
                formId={formId}
                removeField={removeField}
                saveForm={saveForm}
                history={history}
                editFields={editHere}
            />
        </>
    );
};

const App = connect(mapStateToProps, mapDispatchToProps)(FormApp);

export default App;
