import React from 'react';



const createTwoDimensionalArray = () => {
    const rows = 10; // Number of rows
    const cols = 10; // Number of columns
    const arr = [];
  
    let counter = 1;
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(counter++);
      }
      arr.push(row);
    }
  
    return arr;
  };
  

const NumberInDigits = () => {
  
  const numbersTwoD = createTwoDimensionalArray();
 console.log(numbersTwoD)
  return (
    <div className="numbers-container">
      {numbersTwoD.map((row, rowIndex) => (
        <div key={rowIndex} className="number-digit-row">
          {row.map((value, colIndex) => (
            <div key={colIndex} className="number-didgit-item" >
             <span> {value} </span> 
            </div>
          ))}
        </div>
      ))}
      
    </div>
  );
};

export default NumberInDigits;
