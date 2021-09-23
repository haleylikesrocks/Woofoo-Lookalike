import React from 'react';

const Paragraph = ({
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
          <textarea  cols="30" rows="10" disabled={true}></textarea> <br/>
          <button onClick={handleClick}>Remove me</button>
        </div>
    );
}

export default Paragraph;