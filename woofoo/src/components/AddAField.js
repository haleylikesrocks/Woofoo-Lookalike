import React from 'react';

const AddAField = ({
  type,
  title,
  addField,
}) => {

    const handleClick = () => {
      addField(type);
    }

    return (
        <div className="button" href="#">
          <button onClick={handleClick}>{title}</button>
        </div>
    );
}

export default AddAField;
