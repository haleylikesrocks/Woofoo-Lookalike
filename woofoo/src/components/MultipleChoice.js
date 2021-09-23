import React from 'react';

const MultipleChoice = ({
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
      fieldSettings.choices.map((choice, index) =>{
        return (
          <div>
            <input disabled={true} type='radio' id={`choice${index}`}/>
            <label htmlFor={`choice${index}`}>{choice}</label> <br/>
          </div>
        )
      });
    };

    return (
      <div onClick={editHere}> 
        <h3 className="stand" id="foli">{fieldSettings.title}</h3>
        <p>{fieldSettings.instructions}</p>
        {listChoices}
        {/* <input disabled={true} type='radio' id='choice2'/>
        <label htmlFor='choice2'> Choice 2</label> <br/>
        <input disabled={true} type='radio' id='choice3'/>
        <label htmlFor='choice3'> Choice 3</label> <br/> */}
        <button onClick={handleClick}>Remove me</button>
      </div>
    );
};

export default MultipleChoice;