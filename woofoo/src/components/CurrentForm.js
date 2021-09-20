import React from "react";
import { add_single_line_type, add_checkbox } from "../actions/action-types";
import AddASingleLine from "./AddASingleLine";
import CheckBox from "./CheckBox";

class CurrentForm extends React.Component {
    shouldComponentUpdate(nextProps) {
        if (this.props.currentFields.length !== nextProps.currentFields.length) {
            return true;
        }
        return false;
    }

    handleClick = () => {
        const { saveForm, currentFields, formId, history } = this.props;
        saveForm(currentFields, formId);
        history.push(formId);
    }

    render() {
        const { currentFields, removeField } = this.props;
        return (
            <div>
                {currentFields.map((field, index) => {
                    switch (field.type) {
                        case add_single_line_type:
                            return (
                                <AddASingleLine
                                    key={index}
                                    index={index}
                                    removeField={removeField}
                                />
                            );
                        case add_checkbox:
                            return (
                                <CheckBox
                                    key={index}
                                    index={index}
                                    removeField={removeField}
                                />
                            );
                        default:
                            return null;
                    }
                })}
            <button onClick={this.handleClick}>Save Form</button>
            </div>
        );
    }
}

export default CurrentForm;
