import React from 'react'
import "./cardplan.css"


const Index = ({ title, cost, details, icon, onButtonClick }) => {
  return (
    <div className=' plans__item'>
      <div className="plan-card-container">
        <div className="plan-card-header">
          <div className="plan-card-title">{title}</div>
          <div className="plan-card-icon">{icon}</div>
        </div>
        <div className="plan-card-cost">
          <span className="plan-cost-label">COSTO DEL PLAN</span>
          <h2>{cost}</h2>
        </div>
        <hr className="plan-card-divider" />
        <ul className="plan-card-details">
          {details?.map((detail, index) => (
            <li key={index} className="plan-card-detail">
               {detail}
            </li>
          ))}
        </ul>
        <button className="plan-card-button" onClick={()=>onButtonClick({title,cost})}>Seleccionar Plan</button>
      </div>
    </div>
  );
};
export default Index