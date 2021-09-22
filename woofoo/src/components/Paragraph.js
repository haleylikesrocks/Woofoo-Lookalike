import React from 'react';

const Paragraph = ({
  removeField,
  index,
  }) => {
    const handleClick = () => {
      removeField(index);
    }
    return (
        <div> 
          <p>Enter Text</p>
          <textarea  cols="30" rows="10" disabled={true}></textarea> 
          <button onClick={handleClick}>Remove me</button>
        </div>
    );
}

export default Paragraph;