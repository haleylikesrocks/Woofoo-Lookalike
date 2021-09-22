import React from "react";

const AddASingleLine = ({
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
          <h3>{fieldSettings.title}</h3>
          <p>{fieldSettings.instructions}</p>
          <input disabled={true} type='text'/>
          <button onClick={handleClick}>Remove me</button>
        </div>
    );
};

export default AddASingleLine;
