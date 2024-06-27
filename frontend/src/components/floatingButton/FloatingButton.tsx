"use client"
import { useState } from 'react';

const FloatingButton = () => {
  const [showSubIcons, setShowSubIcons] = useState(false);

  const toggleIcons = () => {
    setShowSubIcons(!showSubIcons);
  };

  return (
    <div className="float-icon">
      <div className="main-icon" onClick={toggleIcons}>
        <i className='fal fa-support'></i>
      </div>
      {showSubIcons && (
        <div className="sub-icons">
          <div className="whatsapp-icon">
          <i className="fal fa-whatsapp"></i>
          </div>
          <div className="support-icon">
          <i className="fal fa-whatsapp"></i>          
          </div>
        </div>
      )}
        
    </div>
  );
};

export default FloatingButton;
