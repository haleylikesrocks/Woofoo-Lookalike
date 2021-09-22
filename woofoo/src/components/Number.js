import React from 'react';

const Number = ({
  removeField,
  index,
  }) => {
    const handleClick = () => {
      removeField(index);
    }
    return (
        <div> 
          <p>Enter a Number</p>
          <input type='number' disabled={true}></input>
          <button onClick={handleClick}>Remove me</button>
        </div>
    );
}

export default Number;