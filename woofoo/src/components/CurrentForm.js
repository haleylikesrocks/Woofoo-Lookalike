import React from "react";
import { add_single_line_type, add_checkbox, add_dropdown, add_number, add_multiple_coice, add_paragraph } from "../actions/action-types";
import AddASingleLine from "./AddASingleLine";
import CheckBox from "./CheckBox";
import Number from "./Number";
import Dropdown from "./Dropdown";
import MultipleChoice from "./MultipleChoice";
import Paragraph from "./Paragraph";

class CurrentForm extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.currentFields.length !== nextProps.currentFields.length) {
      return true;
    }
    const shouldUpdate = this.props.currentFields.find((field, index) => {
        const settings = field.fieldSettings;
        if (settings !== nextProps.currentFields[index].fieldSettings) {
            return true;
        }
        return false;
    });

    return !!shouldUpdate;
  }

  handleClick = () => {
    const { saveForm, currentFields, formId, history } = this.props;
    saveForm(currentFields, formId);
    history.push(formId);
  };

    render() {
        const { currentFields, removeField, editFields, beginEditing } = this.props;
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
                                    fieldSettings={field.fieldSettings}
                                    editFields={editFields}
                                    beginEditing={beginEditing}
                                />
                            );
                        case add_checkbox:
                            return (
                                <CheckBox
                                    key={index}
                                    index={index}
                                    removeField={removeField}
                                    fieldSettings={field.fieldSettings}
                                />
                            );
                        case add_number:
                            return(
                                <Number 
                                    key={index}
                                    index={index}
                                    removeField={removeField}
                                />
                            );
                        case add_dropdown:
                            return (
                                <Dropdown 
                                    key={index}
                                    index={index}
                                    removeField={removeField}
                                />
                            );
                        case add_multiple_coice:
                            return (
                                <MultipleChoice
                                    key={index}
                                    index={index}
                                    removeField={removeField}
                                />
                            );
                            case add_paragraph:
                                return (
                                    <Paragraph 
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
