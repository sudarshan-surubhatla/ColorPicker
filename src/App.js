// App.js

import React, { useState } from 'react';
import './App.css';
import ColorPicker from './colorpicker'; // assuming ColorPicker.js is in the same directory

function App() {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className='Main'>
      <h1 className="Color">Color Picker</h1>
      <div className="App" style={{backgroundColor:selectedColor}}>
      
      <div  style={{ backgroundColor: selectedColor || 'initial',  transition: 'background-color 0.5s' }}>
        
        <ColorPicker colors={['red', 'green', 'blue', 'yellow', 'purple','cyan','orange','greenyellow','ivory','magenta','navy','olive','turquoise','plum','maroon','indianred']} onColorChange={handleColorChange} />
      </div>
    </div>
    </div>
    
  );
}

export default App;