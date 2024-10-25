import React, { useState } from 'react';
import './checkbox.css';

const CustomCheckbox = ({ checked, onChange, label }) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (onChange) onChange(!isChecked);
  };

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="checkbox-mark"></span>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
};

export default CustomCheckbox;
