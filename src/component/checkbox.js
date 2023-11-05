import React, { useState } from 'react';

const Checkbox = ({ className, classInfo, onCheckChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const label = {
    name: className,
    info: classInfo
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onCheckChange(label, !isChecked);
  };

  return (
    <div className={`checkbox-wrapper ${isChecked ? 'checkbox-wrapper-checked' : ''}`}>
      <label>
        <div>
          <input className="float" type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
        </div>
        <div className="float">
          <h3>{className}</h3>
          <p>{classInfo}</p>
        </div>
      </label>
    </div>
  );
};
export default Checkbox;
