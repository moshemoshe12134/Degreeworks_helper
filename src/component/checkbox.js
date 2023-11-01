import { useState } from "react";
const Checkbox = ({ className, classInfo }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="checkbox-wrapper">
      <label>
        <input type="checkbox" checked={isChecked} />
        <h3>{className}</h3>
        <p>{classInfo}</p>
      </label>
    </div>
  );
};
export default Checkbox;