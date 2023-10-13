import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  const buttonStyle = {
    backgroundColor: selectedColor || 'black',
    color: 'white',
    padding:'7px',
    width : '100px',
    borderColor :'transparent',
  };

  return (
    <div className='Box'>
         {showColorList && (
            <div style={{ marginTop: '10px' }}>
            {colors.map((color, index) => (
                <div
                key={index}
                style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: color,
                    display: 'inline-block',
                    marginRight: '8px',
                    cursor: 'pointer',
                    borderRadius:'3px',
                                }}
                onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      <button onClick={handleButtonClick} style={buttonStyle}>
        Pick a color
      </button>      
    </div>
  );
};

export default ColorPicker;