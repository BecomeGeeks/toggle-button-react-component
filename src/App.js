import React from 'react';
import ToggleButton from './ToggleButton';

const App = () => {
  const handleToggle = (isActive) => {
    console.log('Toggle state:', isActive);
  };

  return (
    <div>
      <h1>Toggle Button Example</h1>
      <ToggleButton isActive={false} onClick={handleToggle} />
    </div>
  );
};

export default App;