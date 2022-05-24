import Matrix from "./Matrix";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Popup from "./Popup";

function Matrices() {

    const randomNumbers = useSelector( state => state.randomNumbers );
    const [trigger,setTrigger] = useState(false);
    const [result,setResult] = useState('');
    const dispatch = useDispatch();
    const min = useSelector( state => state.min );
    const max = useSelector( state => state.max );

    const input = useSelector( state => state.input );

    const counter = useSelector( state => state.counter );
    const sum = useSelector( state => state.sum );

    useEffect(()=>{
        if ( counter !== 5 && sum >= input ) {
            setTrigger(true);
            setResult('won');
        }
        if ( counter === 0 && sum < input ) {
            setTrigger(true);
            setResult('lost');
        }
    },[sum,input,counter]);

    const handleClick = (id, num) =>{
        if (counter > 0 && sum <= input ){
            dispatch({
                type: 'UPDATE_STAT',
                payload: id,
            });
        
            dispatch({
                type: 'SELECTED_NUMBER',
                payload: num,
            });

            dispatch({
            type: 'DECREMENT_COUNTER',
            });

            dispatch({
            type: 'INCREMENT_SUM',
            payload: num.number,
            });
        }        
           
    }

    const setMin = (e) => {
        dispatch({
            type: 'SET_MIN',
            payload: e.target.value,
        });
    }

    const setMax = (e) => {
        dispatch({
            type: 'SET_MAX',
            payload: e.target.value,
        });
    }

    const setInput = (e) => {
        dispatch({
            type: 'SET_INPUT',
            payload: e.target.value,
        });
    }

    const setList = (i) => {
        let List;
        List = ({  id: i + 1,
                number: Math.floor(Math.random() * (max - min + 1)) + min,
                stat: '',
            });
        dispatch({
        type: 'UPDATE_NUMBER',
        payload: List,
    });
        }
        // };
    

    const startGame = () => {
        const n = 9;
        for (let i = 0; i < n; i++) {
            setList(i);
        }
    }

    return(
        <>
        <div className="stats">
            <input type="password" onChange={(e)=> setInput(e)} placeholder="Enter a number" />
        </div>
        <div className="stats">
            <input type="number" placeholder="Minimum Number" onChange={(e)=> setMin(e)} />
        </div>
        <div className="stats">
            <input type="number" placeholder="Maximun Number" onChange={(e)=> setMax(e)} />
        </div>
        <div className="stats">
            <button onClick={()=> startGame()}>Start Game</button>
        </div>
        <div className="stats">
            <h4>Your Sum is : {sum}</h4>
        </div>
        <div className="stats">
            <h4>Chances Left : {counter}</h4>
        </div>
        <Popup trigger={trigger}  result={result} sum={sum} input={input}/>
        <div className="container">
            {
                randomNumbers.map( (num, index) => (
                    <Matrix key={index} num={num} id={index} handleClick={handleClick} />
                ))
            }
        </div>
        </>
    );
}

export default Matrices;