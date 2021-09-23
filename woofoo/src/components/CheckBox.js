import React from 'react';

const CheckBox = ({
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
          <input disabled={true} type='checkbox' id='choice1'/>
          <label htmlFor='choice1'> {fieldSettings.choices[0]}</label> <br/>
          <input disabled={true} type='checkbox' id='choice2'/>
          <label htmlFor='choice2'> Choice 2</label> <br/>
          <input disabled={true} type='checkbox' id='choice3'/>
          <label htmlFor='choice3'> Choice 3</label> <br/>
          <button onClick={handleClick}>Remove me</button>
        </div>
    );
}

export default CheckBox;
