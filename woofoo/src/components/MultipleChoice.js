import React from 'react';

const MultipleChoice = ({
  removeField,
  index,
  }) => {
    const handleClick = () => {
      removeField(index);
    }
    return (
      <div> 
        <p>Select one choice:</p>
        <input disabled={true} type='radio' id='choice1'/>
        <label htmlFor='choice1'> Choice 1</label> <br/>
        <input disabled={true} type='radio' id='choice2'/>
        <label htmlFor='choice2'> Choice 2</label> <br/>
        <input disabled={true} type='radio' id='choice3'/>
        <label htmlFor='choice3'> Choice 3</label> <br/>
        <button onClick={handleClick}>Remove me</button>
      </div>
    );
}

export default MultipleChoice;