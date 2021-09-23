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

        <div className="button" id="addFields" >

          <button onClick={handleClick}>{title}</button>
        </div>
    );
}

export default AddAField;
