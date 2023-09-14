import React, { useState } from "react";

const Screen = ({ result, setNumExp }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(result);

  const handleClick = () => {
    if (!isEditing) {
      setIsEditing(true);
      setEditedValue(result);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    // Save the edited value when leaving edit mode
    setNumExp({
      result: editedValue,
    });
  };

  const handleChange = (e) => {
    setEditedValue(e.target.value);
  };

  return (
    <div className="screen">
      {isEditing ? (
        <input
          type="text"
          value={editedValue}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <span onClick={handleClick}>{result === "" ? 0 : result}</span>
      )}
    </div>
  );
};

export default Screen;
