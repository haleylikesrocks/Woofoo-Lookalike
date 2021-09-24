import { set } from "@firebase/database";
import React, { useState } from "react";
import { add_single_line_type, add_checkbox, add_dropdown, add_number, add_paragraph, add_multiple_coice } from "../actions/action-types";

const EditInputs = ({ selectedField, index, updateField }) => {
  const handleClick = () => {
    console.log(title, instructions, choices);
    console.log(index);
    let newFields = {
      title,
      instructions,
      choices,
    };
    updateField(index, newFields);
  };

  const [title, setTitle] = useState(selectedField.fieldSettings.title);
  const [instructions, setInstruction] = useState(
    selectedField.fieldSettings.instructions
  );
  const [choices, setChoices] = useState(selectedField.fieldSettings.choices);
  
  const choicesForm = () =>{
    return selectedField.fieldSettings && selectedField.fieldSettings.choices.map((choice, index) => {
      return (
        <div key={index}>
          <br/>
          <h4>{`Set option ${index + 1}`}</h4>
          <input value={choice} type="text" onChange={(e) => updateChoice(e, index)}></input>
          <br/>
        </div>
      )
    })
  } 

  const updateChoice = (e, index) => {
  
    let newArr = [...choices]; // copying the old datas array
    newArr[index] = e.target.value; // replace e.target.value with whatever you want to change it to
  
    setChoices(newArr); // ??
  }

  const showChoices = () => {
    if(selectedField.type === add_checkbox || selectedField.type === add_multiple_coice || selectedField.type === add_dropdown){
      return true;
    }
    return false;
  }

  return (
    <div>
      <form >
        <ul id="allProps" style={{ display: "block" }}>

        <li id="listTitle" style={{ display: "block" }}>
          <h3>Title</h3>
          <input
            className="title"
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </li>
        <h3>Instructions</h3>
        <input
          className="instructions"
          value={instructions}
          type="text"
          onChange={(e) => setInstruction(e.target.value)}
        ></input>
          
        {showChoices() && <h3>Choices</h3> && choicesForm()}

        </ul>
      </form>
      <button onClick={handleClick}>Save Edits</button>
    </div>
  );
};

export default EditInputs;
