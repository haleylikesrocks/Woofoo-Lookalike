import React from 'react';
import { Styles } from '../style.ts';

const AddAField = ({
  type,
  title,
  addField,
}) => {

    const handleClick = () => {
      addField(type);
    }

    return (
        <div className="button" id="addFields" style={Styles.fieldButton}>
          <button onClick={handleClick}>{title}</button>
        </div>
    );
}

export default AddAField;
