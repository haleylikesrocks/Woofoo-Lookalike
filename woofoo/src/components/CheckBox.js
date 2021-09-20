import React from 'react';

const CheckBox = () => {
    return (
        <div> 
          <p>Untitled</p>
          <input disabled={true} type='checkbox' id='choice1'/>
          <label htmlFor='choice1'> Choice 1</label> <br/>
          <input disabled={true} type='checkbox' id='choice2'/>
          <label htmlFor='choice2'> Choice 2</label> <br/>
          <input disabled={true} type='checkbox' id='choice3'/>
          <label htmlFor='choice3'> Choice 3</label> <br/>
        </div>
    );
}

export default CheckBox;
