import React, { useState } from "react";

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
        <h3>Choices</h3>
        <input
          className="choices"
          value={choices}
          type="text"
          onChange={(e) => setChoices(e.target.value)}
        ></input></ul>
      </form>
      <button onClick={handleClick}>Save Edits</button>
    </div>
  );
};

export default EditInputs;
