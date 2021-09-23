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
      return fieldSettings.choices && fieldSettings.choices.map((choice, index) =>{
          console.log(choice, index);
        return (
          <div key={index}>
            <input disabled={true} type='radio' id={`choice${index}`}/>
            <label htmlFor={`choice${index}`}>{choice}</label> 
          </div>
        )
      });
    };

    return (
      <div onClick={editHere}> 
        <h3 className="stand" id="foli">{fieldSettings && fieldSettings.title}</h3>
        <p>{fieldSettings && fieldSettings.instructions}</p>
        {fieldSettings && listChoices()}
        {/* <input disabled={true} type='radio' id='choice2'/>
        <label htmlFor='choice2'> Choice 2</label> <br/>
        <input disabled={true} type='radio' id='choice3'/>
        <label htmlFor='choice3'> Choice 3</label> <br/> */}
        <button onClick={handleClick}>Remove me</button>
      </div>
    );
};

export default MultipleChoice;
