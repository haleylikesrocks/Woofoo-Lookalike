import React from "react";
import { remove_field } from "../actions/action-types";

const AddASingleLine = ({ removeField, index, fieldSettings, editFields }) => {
    const editHere = () => {
        editFields(index);
    };

    const handleClick = (e) => {
        e.stopPropagation();
        removeField(index);
    };

    return (
        <div onClick={editHere}>
            <h3>{fieldSettings.title}</h3>
            <p>{fieldSettings.instructions}</p>
            <input disabled={true} type="text" />
            <button onClick={handleClick}>Remove me</button>
        </div>
    );
};

export default AddASingleLine;
