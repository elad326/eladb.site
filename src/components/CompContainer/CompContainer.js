import React, { Children } from 'react';
import './CompContainer.css';

const CompContainer = ({ children, containerType }) => {

  const cssClass = (containerType === 'bg-img') ? "site-container-bg-img" : "";

  return (
    <div className={`site-container ${cssClass}`}>
        {children}
    </div>
  )
}

export default CompContainer;