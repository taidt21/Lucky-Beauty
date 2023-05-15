import React from "react";
import './loop.css';
const LoopGrid = (Props) => {
  return (
    <div className="grid-item">
      <div className="grid-item-icon">
        <img src={Props.icon} alt="icon" />
      </div>
      <div className="grid-item-text">
        <h3>{Props.title}</h3>
        <div className="flex-bottom">
        <span className="number">{Props.number}</span>
        <span className="ratio">
            <span className="ratio-icon">
                <img src={Props.ratioIcon} alt="ratio"/>
            </span>
            <span className="ratio-text">{Props.ratioText}</span>
        </span>
        </div>
        
      </div>
    </div>
  );
};

export default LoopGrid;
