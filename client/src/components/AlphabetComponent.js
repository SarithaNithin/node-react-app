import React from 'react';

const NumberComponent = () => {
  
  const grids = [ ["Alphabets Lowercase", "Alphabets Uppercase", "Alphabets Song"],["2 Letter Words", "3 Letter Words"] ];
 
  return (
    <div className="grid-container  moving-div">
      {grids.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((content) => (
            <div key={content} className="grid-item ac" >
             <span> {content} </span> 
            </div>
          ))}
        </div>
      ))}
      
    </div>
  );
};

export default NumberComponent;
