import React from "react";

const MultipleChoice = ({
  removeField,
  index,
  fieldSettings,
  beginEditing,

}) => {
  const editHere = () => {
    beginEditing(index);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    removeField(index);
  };

  const listChoices = () => {
      return fieldSettings.choices && fieldSettings.choices.map((choice, index) => {
        console.log(choice, index);
        return (
          <div key={index}>
            <input disabled={true} type="radio" id={`choice${index}`} />
            <label htmlFor={`choice${index}`}>{choice}</label> <br />
          </div>
        );
      });
  };

  return (
    <li onClick={editHere} id="formPreview" style={{ zIndex: 500}}>
      <h3 className="stand" id="foli">
        {fieldSettings && fieldSettings.title}
      </h3>
      <p>{fieldSettings && fieldSettings.instructions}</p>
      {fieldSettings && listChoices()}
      <button onClick={handleClick}>Remove me</button>
    </li>
  );
};


export default MultipleChoice;
