import React, { useState } from 'react';

const Checkbox = ({ className, classInfo, onCheckChange }) => {
  const [isSaved, setIsSaved] = useState(false);

  const label = {
    name: className,
    info: classInfo
  }

  const handleSave = () => {
    const newSavedState = !isSaved;
    setIsSaved(newSavedState);
    onCheckChange(label, newSavedState);
  };

  return (
    <div className={`checkbox-wrapper ${isSaved ? 'checkbox-wrapper-checked' : ''}`}>
      <div className="class-info">
        <h3>{className}</h3>
        <p>{classInfo}</p>
      </div>
      <button className={`save-button ${isSaved ? 'saved' : ''}`} onClick={handleSave}>
        {isSaved ? '  ✕  ' : 'Save'}
      </button>
    </div>
  );
};
export default Checkbox;

