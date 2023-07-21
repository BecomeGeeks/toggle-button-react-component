import React, { useState } from 'react';
import './ToggleButton.css'; // Make sure to create the CSS file for styling

const ToggleButton = ({ isActive, onClick }) => {
  // State to keep track of the button's active state
  const [active, setActive] = useState(isActive);

  // Function to handle the button click and toggle the state
  const handleToggle = () => {
    setActive(!active);
    onClick(!active); // Notify the parent component about the toggle action
  };

  // CSS class name to apply the appropriate style based on the active state
  const buttonClassName = active ? 'toggle-button active' : 'toggle-button';

  return (
    <button className={buttonClassName} onClick={handleToggle}>
      Toggle
    </button>
  );
};

export default ToggleButton;
