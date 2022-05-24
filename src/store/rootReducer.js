import { act } from "react-dom/test-utils";

const initialState = {

    randomNumbers: [
        { id: 1 , number: Math.floor(Math.random() * (35 - 1 + 1)) + 1, stat: '' },
        { id: 2 , number: Math.floor(Math.random() * (35 - 1 + 1)) + 1, stat: '' },
        { id: 3 , number: Math.floor(Math.random() * (35 - 1 + 1)) + 1, stat: '' },
        { id: 4 , number: Math.floor(Math.random() * (35 - 1 + 1)) + 1, stat: '' },
        { id: 5 , number: Math.floor(Math.random() * (35 - 1 + 1)) + 1, stat: '' },
        { id: 6 , number: Math.floor(Math.random() * (35 - 1 + 1)) + 1, stat: '' },
        { id: 7 , number: Math.floor(Math.random() * (35 - 1 + 1)) + 1, stat: '' },
        { id: 8 , number: Math.floor(Math.random() * (35 - 1 + 1)) + 1, stat: '' },
        { id: 9 , number: Math.floor(Math.random() * (35 - 1 + 1)) + 1, stat: '' },
    ],

    clickedNumbers: [],
    input: 100,
    counter: 5,
    sum: 0,
};

const reducer =  ( state = initialState , action ) => {
    switch(action.type){
        
        case 'UPDATE_STAT':
            return{
                ...state,
                randomNumbers: [ ...state.randomNumbers ,state.randomNumbers[action.payload].stat = 'active' ],
            };
        case 'DECREMENT_COUNTER':
            return{
                ...state,
                counter: state.counter - 1,
            };
        case 'INCREMENT_SUM':
            return{
                ...state,
                sum: state.sum + action.payload,
            };
        case 'SET_INPUT':
            return{
                ...state,
                input: action.payload,
            };
        case 'SELECTED_NUMBER':
            return{
                ...state,
                clickedNumbers: [...state.clickedNumbers, action.payload],
            };
        default:{
            return state;
        }
    }
}

export default reducer;