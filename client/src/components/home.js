import React, { useState } from 'react';
import NumberComponent from "./NumberComponent.js"
import AlphabetComponent from "./AlphabetComponent.js"
import NumberInDigits from './NumberInDigits';

const Home = () => {

    // State to track whether the additional component should be shown or not
    const [ShowNumberComponent, setShowNumberComponent] = useState(false);
    const [ShowAlphabetComponent, setShowAlphabetComponent] = useState(false);

    const [showNumberInDigits, setShowNumberInDigits] = useState(false);

    const handleShowNumberInDigits = () => {
      setShowNumberInDigits(true);
    };

    const grids = [ ["Numbers" , "Alphabets"] ];

    const handleButtonClick = (e) => {
        console.log(e.target.innerText)
        if (e.target.innerText === "Numbers") {
            setShowNumberComponent(true);
            setShowAlphabetComponent(false);
        } else if (e.target.innerText === "Alphabets"){
            setShowAlphabetComponent(true);
            setShowNumberComponent(false);
        } else {
          hideSubComponents();
        }
    };
  
    const hideSubComponents = () => {
      setShowAlphabetComponent(false);
      setShowNumberComponent(false);
    };

    return (
      <div className="grid-container">
        {grids.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((content) => (
              <div key={content} className="grid-item" onClick={handleButtonClick} >
                {content}
              </div>
            ))}
          </div>
        ))}
        
        {/* Conditionally render the additional component */}
        {ShowNumberComponent && <NumberComponent onShowNumberInDigits = {handleShowNumberInDigits}/>}
        {ShowAlphabetComponent && <AlphabetComponent />}        
        {showNumberInDigits && <NumberInDigits />}
      </div>
    );
  };
  
  export default Home;
  