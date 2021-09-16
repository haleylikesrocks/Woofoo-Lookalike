import React from 'react';

const CheckBox = () => {
    return (
        <div> 
          <p>Untitled</p>
          <input disabled={true} type='checkbox' id='choice1'/>
          <label for='choice1'> Choice 1</label> <br/>
          <input disabled={true} type='checkbox' id='choice2'/>
          <label for='choice2'> Choice 1</label> <br/>
          <input disabled={true} type='checkbox' id='choice3'/>
          <label for='choice3'> Choice 1</label> <br/>
        </div>
    );
}

export default CheckBox;