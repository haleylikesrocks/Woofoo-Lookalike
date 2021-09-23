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
        <div onClick={editHere}> 
          <h3 className="stand">{fieldSettings.title}</h3>
          <p>{fieldSettings.instructions}</p>
          <input type='number' disabled={true}></input>
          <button onClick={handleClick}>Remove me</button>
        </div>
    );
}

export default Number;