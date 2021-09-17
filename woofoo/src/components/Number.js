import React from 'react';

const Number = () => {
    return (
        <div> 
          <p>Enter a Number</p>
          <input type='number' disabled={true}></input>
        </div>
    );
}

export default Number;