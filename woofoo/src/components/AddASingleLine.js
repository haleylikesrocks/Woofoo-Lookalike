import React from 'react';
import { remove_field } from '../actions/action-types';

const AddASingleLine = ({
  removeField,
  index,
}) => {


    const handleClick = () => {
      removeField(index);
    }

    return (
        <div> 
          <p>Untitled</p>
          <input disabled={true} type='text'/>
          <button onClick={handleClick}>Remove me</button>
        </div>
    );
}

export default AddASingleLine;