import React from 'react';

const AddAField = ({
  type,
  title,
  icon,
  addField
}) => {

    const handleClick = () => {
      addField(type);
      console.log(type);
    }

    return (
        <div>ton o buttons here
          <button onClick={handleClick}>{title}</button>
        </div>
    );
}

export default AddAField;