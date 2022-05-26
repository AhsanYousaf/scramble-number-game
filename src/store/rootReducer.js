//let max = initialState.max;
//let min = initialState.min;

function getRandomNumber(state = initialState) {
    return Math.floor(Math.random() * (state.max - state.min + 1)) + state.min;
};

const initialState = {

    randomNumbers: [],
    clickedNumbers: [],
    input: 100,
    counter: 5,
    sum: 0,
    max: 100,
    min: 1,
};

const reducer =  ( state = initialState , action ) => {
    switch(action.type){
        
        case 'UPDATE_STAT':
            return{
                ...state,
                randomNumbers: [ ...state.randomNumbers ,state.randomNumbers[action.payload].stat = 'active' ],
            };
        case 'UPDATE_NUMBER':
            return{
                ...state,
                randomNumbers: [...state.randomNumbers, action.payload ]
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
        case 'SET_MIN':
            return{
                ...state,
                min: action.payload,
            };  
        case 'SET_MAX':
            return{
                ...state,
                max: action.payload,
            };  
        default:{
            return state;
        }
    }
}

export default reducer;