import React from 'react';

const Dropdown = ({
  removeField,
  index,
  fieldSettings,
  beginEditing,
  }) => {
    const editHere = () =>{
      beginEditing(index);
    }

    const handleClick = (e) => {
      e.stopPropagation();
      removeField(index);
    }

    const listChoices = () => {
      return(
      fieldSettings.choices.map((choice, index) =>{
        return (
          <option key={index} value={`choice${index}`} disabled={true} id={`choice${index}`}>{choice}</option>
        )
      }))
    };

    

    return (

        <li onClick={editHere} id="formPreview" style={{ zIndex: 500}}> 
          <h3 className="stand">{fieldSettings && fieldSettings.title}</h3>
          <p>{fieldSettings && fieldSettings.instructions}</p>

          <select disabled={true}>
            {fieldSettings && listChoices()}
          </select>
          <button onClick={handleClick}>Remove me</button>
        </li>
    );
}

export default Dropdown;