import React from 'react';

const Number = ({
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
        <li onClick={editHere} id="formPreview"> 
          <h3 className="stand">{fieldSettings.title}</h3>
          <p>{fieldSettings.instructions}</p>
          <input type='number' disabled={true}></input>
          <button onClick={handleClick}>Remove me</button>
        </li>
    );
}

export default Number;