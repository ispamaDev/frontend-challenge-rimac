import React from 'react'
import "./cardOption.css"
import Checkbox from "../Checkbox"
const Index = ({ icon, title, description, isSelected, onClick }) => {
  return (
    <div className={`option__container ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <div className='option__content'>
        <div className='option__title'>
        <div className='icon'>{icon}</div>
        <h3>{title}</h3>
        </div>
        <p>{description}</p>
      </div>
       <div className="option__checkmark">
        <input type="checkbox" id="customCheck-select" checked={isSelected}/>
          <label for="customCheck-select" className="custom-checkbox2"></label>
      </div>
    </div>
  );
}
export default Index