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

    return (
        <div className="desc notranslate" onClick={editHere}> 
          <h3 className="stand">{fieldSettings.title}</h3>
          <p>{fieldSettings.instructions}</p>
          <select disabled={true}>
          </select>
          <button onClick={handleClick}>Remove me</button>
        </div>
    );
}

export default Dropdown;