import React from 'react';
import './Popup.css';

function Popup({ trigger, result, sum }) {
 
    if (trigger && result === 'won'){
    return (
    <div className='popup'>
       <div className='popup-inner'>
           <button className='close-btn' onClick={() => window.location.reload()}>New Game</button>
           <h3>Congratulations</h3>
           <h5>Your Sum is : {sum}</h5>
           <h1>You Won!</h1>
        </div> 
    </div>
    )
    }
    if (trigger && result === 'lost'){
    return (
    <div className='popup'>
       <div className='popup-inner'>
           <button className='close-btn' onClick={() => window.location.reload()}>New Game</button>
           <h3>Sorry</h3>
           <h5>Your Sum is : {sum}</h5>
           <h1>You Lost!</h1>
        </div> 
    </div>
    )
    }
}

export default Popup;