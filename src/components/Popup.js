import React, { useState } from 'react';
import './Popup.css';
import { useSelector } from 'react-redux';

function Popup({ trigger, result, input }) {

   // const clickedNumbers = useSelector( state => state.clickedNumbers );
    
 
    if (trigger && result === 'won'){
    return (
    <div className='popup'>
       <div className='popup-inner'>
           <button className='close-btn' onClick={() => window.location.reload()}>New Game</button>
           <h3>Congratulations You Won!</h3>
           <h5>---------------------------------------------------------------------------</h5>
           <h5>Your target was : {input}</h5>
           {/* {
               clickedNumbers.map((num,index) => {
                   let res = input - num.number
                   return (
                       <h6 key={index}>Try:{index + 1 } --- 
                       clicked box number --- {num.id} --- 
                       hidden Number: {num.number} --- 
                       Sum left from target number: {input} - {num.number} = {res} 
                       </h6>
                   );
               })
           } */}
        </div> 
    </div>
    )
    }
    if (trigger && result === 'lost'){
    return (
    <div className='popup'>
       <div className='popup-inner'>
           <button className='close-btn' onClick={() => window.location.reload()}>New Game</button>
           <h3>Sorry You Lost!</h3>
           <h5>--------------------------------------------</h5>
           <h5>Your target was : {input}</h5>
           {/* {
               clickedNumbers.map((num,index) => {
                   return (
                       <h6 key={index}>Try:{index + 1 } --- 
                       clicked box number --- {num.id} --- 
                       hidden Number: {num.number} --- 
                       Sum left from target number: {input} - {num.number} = {input - num.number} 
                       </h6>
                   );
               })
           } */}
        </div> 
    </div>
    )
    }
}

export default Popup;