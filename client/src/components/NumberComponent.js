import React, { useState }  from 'react';

const NumberComponent = ({onShowNumberInDigits}) => {

  const grids = [ ["Numbers (Digits)", "Numbers (Names)", "Number Song"],[ "Addition", "Substraction"] ];
  
  const [isDecreased, setIsDecreased] = useState(false);

  const numberOptionsContainerStyle = {
    maxWidth: isDecreased ? '20%' : '100%',
    float: "left"
  };
  const numberOptionsRowStyle = {
    flexDirection: isDecreased ? "column" : ""
  };
  const numberOptionsItemStyle = {
    width :  isDecreased ? "55%" : "100%"
  };

  const handleButtonClick = (e) => {
    onShowNumberInDigits();
    setIsDecreased((prevState) => !prevState);
  };
  return (
    <div className="number-options-container moving-div" style={numberOptionsContainerStyle}>
      {grids.map((row, rowIndex) => (
        <div key={rowIndex} className="number-options-row" style={numberOptionsRowStyle}>
          {row.map((content) => (
            <div key={content} className="number-options-item nc" onClick={handleButtonClick} style={numberOptionsItemStyle}>
             <span> {content} </span> 
            </div>
          ))}
        </div>
      ))}

    </div>
      
  );

};

export default NumberComponent;
