import React from "react";
import AddAField from "./AddAField";

const FieldButtons = ({ buttonList, addField }) => {
  return (
    <>
      {Object.keys(buttonList).map((type, index) => (
        <AddAField
          key={index}
          type={type}
          title={buttonList[type]}
          addField={addField}
        />
      ))}
    </>
  );
};

export default FieldButtons;
