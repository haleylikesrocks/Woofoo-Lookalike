import React from "react";
import AddAField from "./AddAField";

const FieldButtons = ({ buttonList, addField }) => {
  return (
    <div>
      {Object.keys(buttonList).map((type, index) => (
        <AddAField
          key={index}
          type={type}
          title={buttonList[type]}
          addField={addField}
        />
      ))}
    </div>
  );
};

export default FieldButtons;
