import React from 'react';

const AddAField = ({
  type,
  title,
  addField,
}) => {

    const handleClick = () => {
      addField(type);
      // console.log(type);
    }

    return (
        <div>
          <button onClick={handleClick}>{title}</button>
        </div>
    );
}

export default AddAField;
