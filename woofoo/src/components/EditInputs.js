import React, { useState, useEffect } from "react";
import { updateField } from "../actions/actionCreator";

const EditInputs = ({
    selectedField,
    index,
    updateField
}) => {

    const handleClick = () => {
        console.log(title, instructions, choices);
        console.log(index);
        let newFields = {
            title,
            instructions,
            choices
        }
        updateField(index, newFields);
    }

    const [title, setTitle] = useState(selectedField.fieldSettings.title);
    const [instructions, setInstruction] = useState(selectedField.fieldSettings.instructions);
    const [choices, setChoices] = useState(selectedField.fieldSettings.choices);

    return (
        <div>
            <form>
                <h3>Title</h3>
                <input className='title' value={title} type='text' onChange={e=> setTitle(e.target.value)}></input>
                <h3>Instructions</h3>
                <input className='instructions' value={instructions} type='text' onChange={e=> setInstruction(e.target.value)}></input>
                <h3>Choices</h3>
                <input className='choices' value={choices} type='text' onChange={e=> setChoices(e.target.value)}></input>
            </form>
            <button onClick={handleClick}>Save Edits</button>
        </div>
    );
}

export default EditInputs;