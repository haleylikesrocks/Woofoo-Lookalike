import React from "react";
import { add_single_line_type, add_checkbox } from "../actions/action-types";
import AddASingleLine from "./AddASingleLine";
import CheckBox from "./CheckBox";

class CurrentForm extends React.Component {
    shouldComponentUpdate(nextProps) {
        if (this.props.fields.length !== nextProps.fields.length) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <div>
                {this.props.fields.map((field, index) => {
                    switch (field.type) {
                        case add_single_line_type:
                            return (
                                <AddASingleLine
                                    key={index}
                                    index={index}
                                    removeField={this.props.removeField}
                                />
                            );
                        case add_checkbox:
                            return (
                                <CheckBox
                                    key={index}
                                    index={index}
                                    removeField={this.props.removeField}
                                />
                            );
                        default:
                            console.log(field);
                            return null;
                    }
                })}
            </div>
        );
    }
}

export default CurrentForm;
